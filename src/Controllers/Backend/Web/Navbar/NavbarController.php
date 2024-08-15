<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navbar;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Navbar;

class NavbarController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Navbar',
                'url'   => route('admin.navbar.index'),
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
                'label'     => 'Menu Label',
                'key'       => 'menu_label',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Route',
                'key'       => 'route',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => false,
                'type'      => 'text',
            ],
            [
                'label'     => 'Icon',
                'key'       => 'icon',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'icon',
            ],
            [
                'label'     => 'Is frontend',
                'key'       => 'is_frontend',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'boolean',
            ],
            [
                'label'     => 'Is Active',
                'key'       => 'is_active',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'boolean',
            ]
        ];

        return Inertia::render('BackEnd/Navbar/Index', [
            'title'      => 'Navbar | Navbar',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(Navbar::class),
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
