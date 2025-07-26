<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
{
    /**
     * The attributes that should be cast to native types.
     *
     * @return array
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'date:d/m/Y',
            'updated_at' => 'date:d/m/Y',
        ];
    }
}
