<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Deploy;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Mariojgt\Magnifier\Models\Media;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\Process\Process;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\Magnifier\Resources\MediaResource;
use Mariojgt\SkeletonAdmin\Models\DeploymentLog;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Mariojgt\SkeletonAdmin\Models\DeploymentOutputLog;
use Illuminate\Process\Exceptions\ProcessFailedException;
use Illuminate\Support\Facades\Process as LaravelProcess;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

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

    private function executeDeployment(WebhookConfig $config, DeploymentLog $log)
    {
        try {
            $log->update(['status' => 'running']);
            $output = [];
            $sequence = 0;

            // Notify deployment start to all the admins
            $admins = Admin::all();
            foreach ($admins as $admin) {
                $admin->notify(new GenericNotification(
                    'Deployment Started',
                    'info',
                    'Deployment started for ' . $config->repository_url,
                    'icon'
                ));
            }

            // Change to deployment directory
            chdir(base_path($config->deployment_path));

            // Execute each command
            foreach ($config->deployment_commands as $command) {
                // Log command start
                DeploymentOutputLog::create([
                    'deployment_log_id' => $log->id,
                    'command' => $command,
                    'output' => "Starting command: {$command}",
                    'type' => 'info',
                    'sequence' => $sequence++
                ]);

                // Use Symfony Process for better output handling
                $process = new Process(explode(' ', $command));
                $process->setTimeout(3600);

                $buffer = '';
                $lastUpdate = microtime(true);

                $process->start();

                // Read output in real-time
                $process->wait(function ($type, $buffer) use ($log, $command, &$sequence) {
                    // Process::ERR is for stderr, Process::OUT is for stdout
                    $outputType = $type === Process::ERR ? 'error' : 'info';

                    // Create new log entry
                    DeploymentOutputLog::create([
                        'deployment_log_id' => $log->id,
                        'command' => $command,
                        'output' => $buffer,
                        'type' => $outputType,
                        'sequence' => $sequence++
                    ]);
                });

                if (!$process->isSuccessful()) {
                    // Log error
                    DeploymentOutputLog::create([
                        'deployment_log_id' => $log->id,
                        'command' => $command,
                        'output' => $process->getErrorOutput(),
                        'type' => 'error',
                        'sequence' => $sequence++
                    ]);

                    throw new ProcessFailedException($process);
                }

                // Log successful completion
                DeploymentOutputLog::create([
                    'deployment_log_id' => $log->id,
                    'command' => $command,
                    'output' => "Command completed successfully",
                    'type' => 'success',
                    'sequence' => $sequence++
                ]);

                $output[] = [
                    'command' => $command,
                    'output' => $process->getOutput(),
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
            DeploymentOutputLog::create([
                'deployment_log_id' => $log->id,
                'command' => $command ?? 'General Error',
                'output' => $e->getMessage(),
                'type' => 'error',
                'sequence' => $sequence++
            ]);

            $log->update([
                'status' => 'failed',
                'error_message' => $e->getMessage(),
                'output' => json_encode($output ?? []),
                'completed_at' => now()
            ]);
        } finally {
            Cache::forget("deploy-lock-{$config->id}");
        }
    }

    /**
     * Get deployment output logs
     */
    public function getLogs($deploymentId, Request $request)
    {
        $query = DeploymentOutputLog::where('deployment_log_id', $deploymentId)
            ->orderBy('sequence', 'asc');

        // If last_sequence is provided, only get new logs
        if ($request->has('last_sequence')) {
            $query->where('sequence', '>', $request->last_sequence);
        }

        $logs = $query->get();

        return response()->json([
            'logs' => $logs,
            'last_sequence' => $logs->last()?->sequence ?? 0
        ]);
    }

    /**
     * Get latest deployment status and logs
     */
    public function status($deploymentId)
    {
        $log = DeploymentLog::with(['outputLogs' => function ($query) {
            $query->orderBy('sequence', 'asc');
        }])->findOrFail($deploymentId);

        return response()->json([
            'status' => $log->status,
            'started_at' => $log->started_at,
            'completed_at' => $log->completed_at,
            'logs' => $log->outputLogs,
            'error_message' => $log->error_message
        ]);
    }
}
