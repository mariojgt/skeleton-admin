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
                'url' => route('admin.navigation.index'),
            ],
            [
                'label' => 'Position',
                'url' => route('admin.navigation.position'),
            ],
        ];

        // Return the view
        return Inertia::render('BackEnd/Navigation/PositionManage', [
            'title' => 'Navigations | Position Management',
            'breadcrumb' => $breadcrumb,
            'navigation' => $navigation,
        ]);
    }

    /**
     * Update navigation item position via API
     */
    public function updatePosition(Request $request, Navigation $navigation)
    {
        try {
            $validated = $request->validate([
                'parent_id' => 'nullable|integer|exists:navigations,id',
                'sort_order' => 'required|integer|min:1',
            ]);

            // Prevent self-parenting and circular references
            if ($validated['parent_id'] && $validated['parent_id'] == $navigation->id) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cannot set item as its own parent',
                ], 422);
            }

            // Check for circular reference (if item becomes child of its own descendant)
            if ($validated['parent_id'] && $this->wouldCreateCircularReference($navigation, $validated['parent_id'])) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cannot create circular reference in navigation hierarchy',
                ], 422);
            }

            // Get the old parent to reorder siblings later
            $oldParentId = $navigation->parent_id;
            $oldSortOrder = $navigation->sort_order;

            // Update the navigation item
            $navigation->update([
                'parent_id' => $validated['parent_id'],
                'sort_order' => $validated['sort_order'],
            ]);

            // Reorder siblings in the old parent group (close the gap)
            if ($oldParentId !== $validated['parent_id']) {
                $this->reorderSiblings($oldParentId, $oldSortOrder);
            }

            // Reorder siblings in the new parent group (make space)
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

    /**
     * Reset navigation positions to default order
     */
    public function resetPositions(Request $request)
    {
        try {
            \DB::transaction(function (): void {
                // Reset all navigation items to root level with sequential order
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

    /**
     * Save all navigation positions (bulk operation)
     * This method is mainly for confirmation since individual saves happen via drag & drop
     */
    public function savePositions(Request $request)
    {
        try {
            // Count total navigation items for confirmation
            $totalItems = Navigation::count();

            // Optionally, you could add any cleanup or validation here
            // For example, ensure all items have valid sort_order values
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

    /**
     * Validate and fix sort orders if needed
     */
    private function validateAndFixSortOrders()
    {
        \DB::transaction(function (): void {
            // Fix root level items
            $rootItems = Navigation::whereNull('parent_id')->orderBy('sort_order')->get();
            foreach ($rootItems as $index => $item) {
                if ($item->sort_order != $index + 1) {
                    $item->update(['sort_order' => $index + 1]);
                }
            }

            // Fix child items for each parent
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

    /**
     * Check if moving an item would create a circular reference
     */
    private function wouldCreateCircularReference(Navigation $item, $newParentId)
    {
        if (! $newParentId) {
            return false;
        }

        // Get all descendants of the current item
        $descendants = $this->getAllDescendants($item);

        // Check if the new parent is among the descendants
        return in_array($newParentId, $descendants);
    }

    /**
     * Get all descendant IDs of a navigation item
     */
    private function getAllDescendants(Navigation $item)
    {
        $descendants = [];

        foreach ($item->child as $child) {
            $descendants[] = $child->id;
            $descendants = array_merge($descendants, $this->getAllDescendants($child));
        }

        return $descendants;
    }

    /**
     * Reorder siblings when an item is moved
     */
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

            // If this position is >= the position we're inserting at, shift up
            if ($newOrder >= $fromPosition && $excludeId) {
                $newOrder++;
            }

            if ($sibling->sort_order != $newOrder) {
                $sibling->update(['sort_order' => $newOrder]);
            }
        }
    }

    /**
     * Get navigation tree for display
     */
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

    /**
     * Build children array for navigation tree
     */
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
