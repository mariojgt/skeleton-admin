<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navbar;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Models\Navbar;

class NavbarController extends Controller
{
    public function index()
    {
        $breadcrumb = [
            [
                'label' => 'Navbar',
                'url'   => route('admin.navbar.index'),
            ]
        ];

        // Initialize form helper
        $form = new FormHelper();
        $formConfig = $form
            // Add fields
            ->addIdField()
            ->addField(
                label: 'Menu Label',
                key: 'menu_label',
                sortable: true,
                canCreate: false,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Route',
                key: 'route',
                sortable: true,
                canCreate: false,
                canEdit: false,
                type: FieldTypes::TEXT->value
            )
            ->addIconField(
                label: 'Icon',
                key: 'icon',
                sortable: true,
                canCreate: false,
                canEdit: true
            )
            ->addBooleanField(
                label: 'Is frontend',
                key: 'is_frontend'
            )
            ->addBooleanField(
                label: 'Is Active',
                key: 'is_active'
            )
            // Set endpoints
            ->setEndpoints(
                listEndpoint: route('admin.api.generic.table'),
                deleteEndpoint: route('admin.api.generic.table.delete'),
                createEndpoint: route('admin.api.generic.table.create'),
                editEndpoint: route('admin.api.generic.table.update')
            )
            // Set model
            ->setModel(Navbar::class)
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
            ->build();

        return Inertia::render('BackEnd/Navbar/Index', [
            'title'      => 'Navbar | Navbar',
            'breadcrumb' => $breadcrumb,
            ...$formConfig
        ]);
    }
}
