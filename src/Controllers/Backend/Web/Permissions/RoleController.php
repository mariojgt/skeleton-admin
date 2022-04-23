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
                'required' => false,
            ],
            [
                'label'    => 'Name',
                'key'      => 'name',
                'sortable' => true,
                'required' => true,
                'type'     => 'text',
            ],
            [
                'label'    => 'Guard',
                'key'      => 'guard_name',
                'sortable' => true,
                'required' => true,
                'type'     => 'text',
            ],
            [
                'label'    => 'Created At',
                'key'      => 'created_at',
                'sortable' => false,
                'required' => false,
            ],
            [
                'label'    => 'Updated At',
                'key'      => 'updated_at',
                'sortable' => false,
                'required' => false,
            ],
        ];

        return Inertia::render('BackEnd/Permissions/Index', [
            'title' => 'Permissions | Roles',
            // Required for the generic table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'columns'        => $columns,
            'model'          => encrypt(Role::class),
        ]);
    }
}
