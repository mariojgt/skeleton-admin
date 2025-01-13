<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Http\Resources\Json\JsonResource;
use Mariojgt\SkeletonAdmin\Helpers\Gravatar;

class DeploymentLogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'webhook_config' => [
                'id' => $this->webhookConfig->id,
                'name' => $this->webhookConfig->name,
                'repository_url' => $this->webhookConfig->repository_url,
                'branch' => $this->webhookConfig->branch,
                'deployment_path' => $this->webhookConfig->deployment_path,
                'deployment_commands' => $this->webhookConfig->deployment_commands,
            ],
            'commit_hash' => $this->commit_hash,
            'status' => $this->status,
            'started_at' => $this->started_at,
            'completed_at' => $this->completed_at,
            'duration' => $this->getDurationInSeconds(),
            'error_message' => $this->error_message,
            'logs' => DeploymentOutputLogResource::collection($this->whenLoaded('outputLogs')),
            'progress' => $this->getProgress(),
            'metadata' => [
                'repository_name' => $this->getRepositoryName(),
                'short_hash' => substr($this->commit_hash, 0, 8),
                'completed_commands' => $this->getCompletedCommands(),
                'total_commands' => count($this->webhookConfig->deployment_commands ?? []),
                'is_cancelable' => $this->status === 'running',
                'has_error' => !empty($this->error_message),
            ],
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    /**
     * Get repository name from URL
     */
    protected function getRepositoryName(): string
    {
        $url = $this->webhookConfig->repository_url;
        if (preg_match('/github\.com\/(.+?)(?:\.git)?$/', $url, $matches)) {
            return $matches[1];
        }
        return $url;
    }

    /**
     * Calculate deployment progress
     */
    protected function getProgress(): array
    {
        $totalCommands = count($this->webhookConfig->deployment_commands ?? []);
        $completedCommands = $this->getCompletedCommands();

        return [
            'percentage' => $totalCommands > 0 ? ($completedCommands / $totalCommands) * 100 : 0,
            'completed' => $completedCommands,
            'total' => $totalCommands,
        ];
    }

    /**
     * Count completed commands
     */
    protected function getCompletedCommands(): int
    {
        if (!$this->relationLoaded('outputLogs')) {
            return 0;
        }

        return $this->outputLogs
            ->where('type', 'success')
            ->count();
    }
}
