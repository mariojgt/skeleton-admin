<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Navigation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mariojgt\SkeletonAdmin\Models\Navigation;

class NavigationController extends Controller
{
    /**
     * Update the navigation information
     */
    public function menuUpdate(Request $request, Navigation $navigation)
    {
        // Update the navigation information
        $navigation->sort_order = Request('sort_order');
        $navigation->parent_id = Request('parent_id');
        $navigation->save();

        return response()->json(['success' => true]);
    }
}
