<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WebhookConfig extends Model
{
    protected $fillable = [
        'name',
        'repository_url',
        'branch',
        'secret_token',
        'is_active',
        'deployment_commands',
        'deployment_path',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'deployment_commands' => 'array',
        'secret_token' => 'encrypted',
    ];

    public function deploymentLogs(): HasMany
    {
        return $this->hasMany(DeploymentLog::class);
    }
}
