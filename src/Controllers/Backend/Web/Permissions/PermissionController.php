<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
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

        // Initialize form helper
        $form = new FormHelper();
        $formConfig = $form
            // Add fields
            ->addIdField()
            ->addField(
                label: 'Name',
                key: 'name',
                type: FieldTypes::TEXT->value
            )
            ->addSelectWithOptions(
                label: 'Guard',
                key: 'guard_name',
                options: [
                    'skeleton_admin' => 'backend',
                    'web'           => 'frontend',
                    'api'           => 'api',
                ]
            )
            ->addField(
                label: 'Created At',
                key: 'created_at',
                sortable: false,
                canCreate: false,
                canEdit: true,
                type: FieldTypes::DATE->value
            )
            ->addTimestampField(
                label: 'Updated At',
                key: 'updated_at',
                canEdit: true
            )
            // Set endpoints
            ->setEndpoints(
                listEndpoint: route('admin.api.generic.table'),
                deleteEndpoint: route('admin.api.generic.table.delete'),
                createEndpoint: route('admin.api.generic.table.create'),
                editEndpoint: route('admin.api.generic.table.update')
            )
            // Set model
            ->setModel(Permission::class)
            // Set permissions
            ->setPermissions(
                guard: 'skeleton_admin',
                type: 'permission',
                permissions: [
                    'store'  => 'create-permission',
                    'update' => 'edit-permission',
                    'delete' => 'delete-permission',
                    'index'  => 'read-permission',
                ]
            )
            // Build final configuration
            ->build();

        return Inertia::render('BackEnd/Permissions/Index', [
            'title'      => 'Permissions | Permissions',
            'breadcrumb' => $breadcrumb,
            ...$formConfig
        ]);
    }
}
