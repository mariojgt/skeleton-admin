<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Models\Navigation;
use Mariojgt\SkeletonAdmin\Resource\Common\NavigationResource;

class NavigationController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Navigation',
                'url'   => route('admin.navigation.index'),
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
            // Set endpoints
            ->setEndpoints(
                listEndpoint: route('admin.api.generic.table'),
                deleteEndpoint: route('admin.api.generic.table.delete'),
                createEndpoint: route('admin.api.generic.table.create'),
                editEndpoint: route('admin.api.generic.table.update')
            )
            // Set model
            ->setModel(Navigation::class)
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

        return Inertia::render('BackEnd/Navigation/Index', [
            'title'      => 'Navigation | Navigation',
            'breadcrumb' => $breadcrumb,
            ...$formConfig
        ]);
    }

    /**
     * This function will allow us to manage the navigation menu drag and drop
     */
    public function position(Request $request)
    {
        // Return the navigation resource order by the sort order
        $navigation = NavigationResource::collection(Navigation::whereNull('parent_id')->orderBy('sort_order', 'desc')->get());

        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Navigations',
                'url'   => route('admin.navigation.index'),
            ],
            [
                'label' => 'Position',
                'url'   => route('admin.navigation.position'),
            ],
        ];

        // Return the view
        return Inertia::render('BackEnd/Navigation/PositionManage', [
            'title'      => 'Navigations | Position Management',
            'breadcrumb' => $breadcrumb,
            'navigation' => $navigation,
        ]);
    }
}
