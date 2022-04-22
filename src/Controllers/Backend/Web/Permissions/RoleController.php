<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Role;

class RoleController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        // Table columns
        $columns = [
            [
                'label'    => 'Id',
                'key'      => 'id',
                'sortable' => true,
            ],
            [
                'label'    => 'Name',
                'key'      => 'name',
                'sortable' => true,
            ],
            [
                'label'    => 'Guard',
                'key'      => 'guard_name',
                'sortable' => true,
            ],
            [
                'label'    => 'Created At',
                'key'      => 'created_at',
                'sortable' => false,
            ],
            [
                'label'    => 'Updated At',
                'key'      => 'updated_at',
                'sortable' => false,
            ],
        ];

        return Inertia::render('BackEnd/Permissions/Index', [
            'title' => 'Permissions | Roles',
            // Required for the generic table api
            'endpoint' => route('admin.api.generic.table'),
            'columns'  => $columns,
            'model'    => encrypt(Role::class),
        ]);
    }
}
