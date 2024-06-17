<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\User;

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
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class UserController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Users',
                'url'   => route('user.admin.index'),
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
                'label'     => 'First Name',
                'key'       => 'first_name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => FieldTypes::TEXT->value,
            ],
            [
                'label'     => 'Last Name',
                'key'       => 'last_name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => FieldTypes::TEXT->value,
            ],
            [
                'label'     => 'Email',
                'key'       => 'email',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => FieldTypes::EMAIL->value,
            ],
            [
                'label'     => 'Password',
                'key'       => 'password',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => false,
                'type'      => FieldTypes::PASSWORD->value,
            ],
        ];

        return Inertia::render('BackEnd/User/Index', [
            'title'      => 'Admin | Admin',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(User::class),
            // If you want to protect your crud form you can use this below not required
            // The permission name for the crud
            'permission'     => encrypt([
                'guard'         => 'skeleton_admin',
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
        ]);
    }
}
