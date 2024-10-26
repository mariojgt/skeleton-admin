<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DeploymentOutputLog extends Model
{
    protected $fillable = [
        'deployment_log_id',
        'command',
        'output',
        'type',
        'sequence'
    ];

    public function deploymentLog()
    {
        return $this->belongsTo(DeploymentLog::class);
    }
}
