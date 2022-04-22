<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Spatie\Permission\Models\Role as SpatieRole;

class Permission extends SpatieRole
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'date:d/m/Y',
        'updated_at' => 'date:d/m/Y',
    ];
}
