<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DeploymentLog extends Model
{
    protected $fillable = [
        'webhook_config_id',
        'commit_hash',
        'status',
        'output',
        'error_message',
        'started_at',
        'completed_at',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    public function webhookConfig()
    {
        return $this->belongsTo(WebhookConfig::class);
    }
}
