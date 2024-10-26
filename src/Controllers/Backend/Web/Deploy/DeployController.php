<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Deploy;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Illuminate\Support\Facades\Session;
use Mariojgt\SkeletonAdmin\Models\Role;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Models\WebhookConfig;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class DeployController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Role',
                'url'   => route('admin.role.index'),
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
                'label'     => 'Repository Url',
                'key'       => 'repository_url',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Branch',
                'key'       => 'branch',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Is active',
                'key'       => 'is_active',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'boolean',
            ],
            [
                'label'     => 'Deployment Path',
                'key'       => 'deployment_path',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Deployment Commands',
                'key'       => 'deployment_commands',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'chips',
            ]
        ];
        return Inertia::render('BackEnd/Deploy/Index', [
            'title'      => 'Deploy',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(WebhookConfig::class),
            // If you want to protect your crud form you can use this below not required
            'permission'     => encrypt([
                'guard'          => 'skeleton_admin',
                // You can use permission or role up to you
                'type'          => 'permission',
                // The permission name or role
                'key' => [
                    'store'  => 'create-permission',
                    'update' => 'edit-permission',
                    'delete' => 'delete-permission',
                    'index'  => 'read-permission',
                ],
            ]),
            'custom_edit_route' => '/' . config('skeleton.route_prefix') . '/deploy/edit/',
        ]);
    }

    public function edit(Request $request, WebhookConfig $deploy)
    {
        $breadcrumb = [
            [
                'label' => 'Webhook',
                'url'   => route('admin.deploy.index'),
            ]
        ];

        return Inertia::render('BackEnd/Deploy/Edit', [
            'breadcrumb'      => $breadcrumb,
            'deploy'          => $deploy
        ]);
    }

    public function update(Request $request, WebhookConfig $deploy)
    {
        $validData = $request->validate([
            'name'                => 'required',
            'repository_url'      => 'required',
            'branch'              => 'required',
            'is_active'           => 'required',
            'deployment_path'     => 'required',
            'deployment_commands' => 'required',
            'secret_token'        => 'nullable|string',
        ]);

        $deploy->name                = $validData['name'];
        $deploy->repository_url      = $validData['repository_url'];
        $deploy->branch              = $validData['branch'];
        $deploy->is_active           = $validData['is_active'];
        $deploy->deployment_path     = $validData['deployment_path'];
        $deploy->deployment_commands = $validData['deployment_commands'];
        $deploy->secret_token        = $validData['secret_token'];
        $deploy->save();

        return back()->with('success', 'Deploy updated successfully');
    }
}
