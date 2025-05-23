<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Models\Navigation;
use Mariojgt\SkeletonAdmin\Resource\Common\NavigationResource;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;

class NavigationController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Navigation | Navigation';
        $this->model = Navigation::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper())
            ->addIdField()
            ->addField(
                label: 'Menu Label',
                key: 'menu_label',
                sortable: true,
                canCreate: true, // Changed to true to allow creation
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Route',
                key: 'route',
                sortable: true,
                canCreate: true, // Changed to true to allow creation
                canEdit: true, // Changed to true to allow editing
                type: FieldTypes::TEXT->value
            )
            ->addIconField(
                label: 'Icon',
                key: 'icon',
                sortable: true,
                canCreate: true, // Changed to true to allow creation
                canEdit: true
            )
            // Add a custom route for the "Position" action
            ->setCustomPointRoute(
                route: route('admin.navigation.position'),
                customActionName: 'Position Management'
            );
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
