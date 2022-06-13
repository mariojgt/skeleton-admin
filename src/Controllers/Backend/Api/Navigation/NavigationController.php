<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Navigation;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Navigation;

class NavigationController extends Controller
{
    /**
     * Update the naviation information
     *
     * @param request $request
     *
     * @return success
     */
    public function menuUpdate(Request $request, Navigation $navigation)
    {
        // Update the navigation information
        $navigation->sort_order = Request('sort_order');
        $navigation->parent_id  = Request('parent_id');
        $navigation->save();

        return response()->json(['success' => true]);
    }
}
