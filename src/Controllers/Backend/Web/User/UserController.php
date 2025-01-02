<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\User;

use App\Models\User;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;

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

        // Initialize form helper
        $form = new FormHelper();
        $formConfig = $form
            // Add fields
            ->addIdField()
            ->addField('First Name', 'first_name', type: FieldTypes::TEXT->value)
            ->addField('Last Name', 'last_name', type: FieldTypes::TEXT->value)
            ->addField('Email', 'email', type: FieldTypes::EMAIL->value)
            ->addField('Password', 'password', type: FieldTypes::PASSWORD->value)
            ->addField('Email Verified At', 'email_verified_at', type: FieldTypes::DATE->value)
            // Set endpoints
            ->setEndpoints(
                listEndpoint: route('admin.api.generic.table'),
                deleteEndpoint: route('admin.api.generic.table.delete'),
                createEndpoint: route('admin.api.generic.table.create'),
                editEndpoint: route('admin.api.generic.table.update')
            )
            // Set model
            ->setModel(User::class)
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
            // Set custom edit route
            ->setCustomEditRoute('/' . config('skeleton.route_prefix') . '/admin/edit/')
            // Build final configuration
            ->build();

        return Inertia::render('BackEnd/User/Index', [
            'title'      => 'Admin | Admin',
            'breadcrumb' => $breadcrumb,
            ...$formConfig
        ]);
    }
}
