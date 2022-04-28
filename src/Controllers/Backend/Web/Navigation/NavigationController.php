<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Models\Navigation;

class NavigationController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        // Table columns
        $columns = [
            [
                'label'     => 'Id',    // Display name
                'key'       => 'id',    // Table column key
                'sortable'  => true,    // Can be use in the filter
                'canCreate' => false,   // Can be use in the create form
                'canEdit'   => false,   // Can be use in the edit form
            ],
            [
                'label'     => 'Menu Label',   // Display name
                'key'       => 'menu_label',   // Table column key
                'sortable'  => true,           // Can be use in the filter
                'canCreate' => true,           // Can be use in the create form
                'canEdit'   => true,           // Can be use in the edit form
                'type'      => 'text',         // Type text,email,password,date,timestamp
            ],
            [
                'label'     => 'Route',
                'key'       => 'route',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ]
        ];

        return Inertia::render('BackEnd/Navigation/Index', [
            'title' => 'Navigations | Navigations',
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(Navigation::class),
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
