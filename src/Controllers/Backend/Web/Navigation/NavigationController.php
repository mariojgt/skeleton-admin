<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Navigation;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;
use Mariojgt\SkeletonAdmin\Models\Navigation;
use Mariojgt\SkeletonAdmin\Resource\Common\NavigationResource;

class NavigationController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Navigation | Navigation';
        $this->model = Navigation::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper)
            ->addIdField()
            ->addField(
                label: 'Menu Label',
                key: 'menu_label',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Route',
                key: 'route',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Icon',
                key: 'icon',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::ICON->value
            )
            ->setCustomPointRoute(
                route: route('admin.navigation.position'),
                customActionName: 'Position Management'
            );
    }

    public function position(Request $request)
    {
        $navigation = NavigationResource::collection(Navigation::whereNull('parent_id')->orderBy('sort_order', 'desc')->get());

        $breadcrumb = [
            [
                'label' => 'Navigations',
                'url' => route('admin.navigation.index'),
            ],
            [
                'label' => 'Position',
                'url' => route('admin.navigation.position'),
            ],
        ];

        return Inertia::render('BackEnd/Navigation/PositionManage', [
            'title' => 'Navigations | Position Management',
            'breadcrumb' => $breadcrumb,
            'navigation' => $navigation,
        ]);
    }

    public function updatePosition(Request $request, Navigation $navigation)
    {
        try {
            $validated = $request->validate([
                'parent_id' => 'nullable|integer|exists:navigations,id',
                'sort_order' => 'required|integer|min:1',
            ]);

            if ($validated['parent_id'] && $validated['parent_id'] == $navigation->id) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cannot set item as its own parent',
                ], 422);
            }

            if ($validated['parent_id'] && $this->wouldCreateCircularReference($navigation, $validated['parent_id'])) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cannot create circular reference in navigation hierarchy',
                ], 422);
            }

            $oldParentId = $navigation->parent_id;
            $oldSortOrder = $navigation->sort_order;

            $navigation->update([
                'parent_id' => $validated['parent_id'],
                'sort_order' => $validated['sort_order'],
            ]);

            if ($oldParentId !== $validated['parent_id']) {
                $this->reorderSiblings($oldParentId, $oldSortOrder);
            }

            $this->reorderSiblings($validated['parent_id'], $validated['sort_order'], $navigation->id);

            return response()->json([
                'success' => true,
                'message' => 'Navigation position updated successfully',
                'data' => [
                    'id' => $navigation->id,
                    'parent_id' => $navigation->parent_id,
                    'sort_order' => $navigation->sort_order,
                    'menu_label' => $navigation->menu_label,
                ],
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            \Log::error('Navigation update failed: '.$e->getMessage(), [
                'navigation_id' => $navigation->id,
                'request_data' => $request->all(),
                'stack_trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to update navigation position: '.$e->getMessage(),
            ], 500);
        }
    }

    public function resetPositions(Request $request)
    {
        try {
            \DB::transaction(function (): void {
                $navigations = Navigation::orderBy('id')->get();

                foreach ($navigations as $index => $navigation) {
                    $navigation->update([
                        'sort_order' => $index + 1,
                        'parent_id' => null,
                    ]);
                }
            });

            return response()->json([
                'success' => true,
                'message' => 'Navigation positions reset successfully',
            ]);
        } catch (\Exception $e) {
            \Log::error('Navigation reset failed: '.$e->getMessage(), [
                'stack_trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to reset navigation positions: '.$e->getMessage(),
            ], 500);
        }
    }

    public function savePositions(Request $request)
    {
        try {
            $totalItems = Navigation::count();

            $this->validateAndFixSortOrders();

            return response()->json([
                'success' => true,
                'message' => 'All navigation positions confirmed and validated successfully',
                'total_items' => $totalItems,
            ]);
        } catch (\Exception $e) {
            \Log::error('Navigation positions validation failed: '.$e->getMessage(), [
                'stack_trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to validate navigation positions: '.$e->getMessage(),
            ], 500);
        }
    }

    private function validateAndFixSortOrders()
    {
        \DB::transaction(function (): void {
            $rootItems = Navigation::whereNull('parent_id')->orderBy('sort_order')->get();
            foreach ($rootItems as $index => $item) {
                if ($item->sort_order != $index + 1) {
                    $item->update(['sort_order' => $index + 1]);
                }
            }

            $parents = Navigation::whereHas('child')->get();
            foreach ($parents as $parent) {
                $children = $parent->child()->orderBy('sort_order')->get();
                foreach ($children as $index => $child) {
                    if ($child->sort_order != $index + 1) {
                        $child->update(['sort_order' => $index + 1]);
                    }
                }
            }
        });
    }

    private function wouldCreateCircularReference(Navigation $item, $newParentId)
    {
        if (! $newParentId) {
            return false;
        }

        $descendants = $this->getAllDescendants($item);

        return in_array($newParentId, $descendants);
    }

    private function getAllDescendants(Navigation $item)
    {
        $descendants = [];

        foreach ($item->child as $child) {
            $descendants[] = $child->id;
            $descendants = array_merge($descendants, $this->getAllDescendants($child));
        }

        return $descendants;
    }

    private function reorderSiblings($parentId, $fromPosition, $excludeId = null)
    {
        $siblings = Navigation::where('parent_id', $parentId)
            ->when($excludeId, function ($query) use ($excludeId) {
                return $query->where('id', '!=', $excludeId);
            })
            ->orderBy('sort_order')
            ->get();

        foreach ($siblings as $index => $sibling) {
            $newOrder = $index + 1;

            if ($newOrder >= $fromPosition && $excludeId) {
                $newOrder++;
            }

            if ($sibling->sort_order != $newOrder) {
                $sibling->update(['sort_order' => $newOrder]);
            }
        }
    }

    public function getNavigationTree()
    {
        try {
            $rootItems = Navigation::whereNull('parent_id')
                ->orderBy('sort_order')
                ->get();

            $tree = [];
            foreach ($rootItems as $item) {
                $tree[] = [
                    'id' => $item->id,
                    'menu_label' => $item->menu_label,
                    'route' => $item->route,
                    'icon' => $item->icon,
                    'sort_order' => $item->sort_order,
                    'children' => $this->buildNavigationChildren($item),
                ];
            }

            return response()->json([
                'success' => true,
                'data' => $tree,
            ]);
        } catch (\Exception $e) {
            \Log::error('Failed to get navigation tree: '.$e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to load navigation tree',
            ], 500);
        }
    }

    private function buildNavigationChildren(Navigation $parent)
    {
        $children = [];

        foreach ($parent->child()->orderBy('sort_order')->get() as $child) {
            $children[] = [
                'id' => $child->id,
                'menu_label' => $child->menu_label,
                'route' => $child->route,
                'icon' => $child->icon,
                'sort_order' => $child->sort_order,
                'children' => $this->buildNavigationChildren($child),
            ];
        }

        return $children;
    }
}
