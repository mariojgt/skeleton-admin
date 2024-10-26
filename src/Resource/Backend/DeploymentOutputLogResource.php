<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Http\Request;
use Mariojgt\SkeletonAdmin\Helpers\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;

class DeploymentOutputLogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'content' => $this->output,
            'timestamp' => $this->created_at,
            'formatted_time' => $this->created_at->format('H:i:s'),
            'sequence' => $this->sequence,
            'metadata' => [
                'is_command' => $this->type === 'command',
                'is_error' => $this->type === 'error',
                'is_success' => $this->type === 'success',
                'is_running' => $this->type === 'running',
                'needs_indent' => $this->type !== 'command',
            ]
        ];
    }
}
