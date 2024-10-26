<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Model;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DeploymentLog extends Model
{
    protected $fillable = [
        'webhook_config_id',
        'commit_hash',
        'status',
        'output',
        'error_message',
        'started_at',
        'completed_at'
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
        'output' => 'array'
    ];

    public function webhookConfig(): BelongsTo
    {
        return $this->belongsTo(WebhookConfig::class);
    }

    public function outputLogs()
    {
        return $this->hasMany(DeploymentOutputLog::class);
    }

    public function getDurationInSeconds()
    {
        if (!$this->started_at) {
            return 0;
        }

        $endTime = $this->completed_at ?? now();
        return $endTime->diffInSeconds($this->started_at);
    }
}
