<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Deploy;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Mariojgt\Magnifier\Models\Media;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Process;
use Mariojgt\Magnifier\Resources\MediaResource;
use Mariojgt\SkeletonAdmin\Models\DeploymentLog;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Illuminate\Process\Exceptions\ProcessFailedException;

class DeployWebhookController extends Controller
{
     /**
     * Handle the incoming GitHub webhook request
     */
    public function handle(Request $request)
    {
        // Verify GitHub event type
        $githubEvent = $request->header('X-GitHub-Event');
        if ($githubEvent !== 'push') {
            return response()->json(['message' => 'Ignored event type: ' . $githubEvent], 200);
        }

        // Parse the payload
        $payload = $request->json()->all();
        // Get repository and branch information
        $repositoryUrl = $payload['repository']['svn_url'] ?? '';
        $branch = str_replace('refs/heads/', '', $payload['ref'] ?? '');

        // Find matching webhook configuration
        $config = WebhookConfig::where('repository_url', $repositoryUrl)
            ->where('branch', $branch)
            ->where('is_active', true)
            ->first();

        if (!$config) {
            return response()->json(['message' => 'No matching webhook configuration found'], 404);
        }

        // Validate GitHub signature
        if (!$this->validateGitHubSignature($request, $config->secret_token)) {
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        // Prevent concurrent deployments
        $lockKey = "deploy-lock-{$config->id}";
        if (Cache::has($lockKey)) {
            return response()->json(['message' => 'Deployment already in progress'], 409);
        }

        // Create deployment log entry
        $deploymentLog = DeploymentLog::create([
            'webhook_config_id' => $config->id,
            'commit_hash' => $payload['after'] ?? null,
            'status' => 'pending',
            'started_at' => now(),
        ]);

        // Acquire lock
        Cache::put($lockKey, true, 3600); // Lock for 1 hour max

        try {
            // Execute deployment in background
            $this->executeDeployment($config, $deploymentLog);

            return response()->json([
                'message' => 'Deployment started',
                'deployment_id' => $deploymentLog->id
            ], 202);
        } catch (\Exception $e) {
            Cache::forget($lockKey);
            $deploymentLog->update([
                'status' => 'failed',
                'error_message' => $e->getMessage(),
                'completed_at' => now()
            ]);

            return response()->json(['message' => 'Deployment failed to start'], 500);
        }
    }

    /**
     * Validate GitHub webhook signature
     */
    private function validateGitHubSignature(Request $request, ?string $secret): bool
    {
        if (empty($secret)) {
            return false;
        }

        $signature = $request->header('X-Hub-Signature-256');
        if (empty($signature)) {
            return false;
        }

        // Calculate expected signature using your secret
        $expectedSignature = 'sha256=' . hash_hmac(
            'sha256',
            $request->getContent(),
            $secret
        );

        return hash_equals($expectedSignature, $signature);
    }

    /**
     * Execute the deployment commands
     */
    private function executeDeployment(WebhookConfig $config, DeploymentLog $log)
    {
        try {
            $log->update(['status' => 'running']);
            $output = [];

            // Change directory to deployment path
            chdir(base_path($config->deployment_path));

            // Execute each command
            foreach ($config->deployment_commands as $command) {
                $process = Process::timeout(3600)->run($command);

                if (!$process->successful()) {
                    throw new ProcessFailedException($process);
                }

                $output[] = [
                    'command' => $command,
                    'output' => $process->output(),
                ];
            }

            // Update log with success
            $log->update([
                'status' => 'completed',
                'output' => json_encode($output),
                'completed_at' => now()
            ]);
        } catch (\Exception $e) {
            // Log the error
            Log::error('Deployment failed: ' . $e->getMessage(), [
                'webhook_config_id' => $config->id,
                'deployment_log_id' => $log->id,
                'error' => $e->getMessage()
            ]);

            // Update log with failure
            $log->update([
                'status' => 'failed',
                'error_message' => $e->getMessage(),
                'output' => json_encode($output ?? []),
                'completed_at' => now()
            ]);
        } finally {
            // Release the lock
            Cache::forget("deploy-lock-{$config->id}");
        }
    }

    /**
     * Get deployment status
     */
    public function status($deploymentId)
    {
        $log = DeploymentLog::findOrFail($deploymentId);

        return response()->json([
            'status' => $log->status,
            'started_at' => $log->started_at,
            'completed_at' => $log->completed_at,
            'output' => json_decode($log->output, true),
            'error_message' => $log->error_message
        ]);
    }
}
