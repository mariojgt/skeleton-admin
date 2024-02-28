<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Permissions',
                'url'   => route('admin.permission.index'),
            ]
        ];

        // Table columns
        $columns = [
            [
                'label'     => 'Id',
                'key'       => 'id',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => false,
            ],
            [
                'label'     => 'Name',
                'key'       => 'name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Guard',
                'key'       => 'guard_name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'           => 'select',
                'select_options' => [
                    'skeleton_admin' => 'backend',
                    'web'            => 'frontend',
                    'api'            => 'api',
                ]
            ],
            [
                'label'     => 'Created At',
                'key'       => 'created_at',
                'sortable'  => false,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'date',
            ],
            [
                'label'     => 'Updated At',
                'key'       => 'updated_at',
                'sortable'  => false,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'timestamp',
            ]
        ];

        return Inertia::render('BackEnd/Permissions/Index', [
            'title'      => 'Permissions | Permissions',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(Permission::class),
            // If you want to protect your crud form you can use this below not required
            // The permission name for the crud
            'permission'     => encrypt([
                'guard'          => 'skeleton_admin',
                // You can use permission or role up to you
                'type'          => 'permission',
                'key' => [
                    'store'  => 'create-permission',
                    'update' => 'edit-permission',
                    'delete' => 'delete-permission',
                    'index'  => 'read-permission',
                ],
            ]),
        ]);
    }
}
