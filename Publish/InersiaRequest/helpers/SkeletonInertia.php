<?php

namespace App\Helpers;

use Illuminate\Http\Request;

/**
 * This class will automatically change the inersia layout to the admin layout, you can override to whatever view you want.
 */
class SkeletonInertia
{
    /**
     * Update the view for inersia js, need to be static because it is called from the middleware.
     *
     * @param Request $request
     *
     * @return string [view path]
     */
    public static function returnInersiaLayout(Request $request)
    {
        // Change the route to use the admin layout instead of the user layout.
        if ($request->route()->getPrefix() === 'admin') {
            return 'skeleton-admin.backend';
        } else {
            return 'skeleton-admin.frontend';
        }
    }
}
