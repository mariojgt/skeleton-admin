<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Deploy;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\Process\Process;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\DeploymentLog;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Mariojgt\SkeletonAdmin\Models\DeploymentOutputLog;
use Illuminate\Process\Exceptions\ProcessFailedException;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;
use Mariojgt\SkeletonAdmin\Jobs\ExecuteDeployment;

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
        $branch = $payload['repository']['default_branch'] ?? '';

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
        ExecuteDeployment::dispatch($config, $log);
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
