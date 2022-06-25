<?php

namespace Mariojgt\SkeletonAdmin\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

/**
 * Skeleton admin middleware, will manage the backend.
 */
class SkeletonAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check if the guard is logged in
        if (Auth::guard('skeleton_admin')->check()) {
            return $next($request);
        }

        return redirect(route('skeleton.login'));
    }
}
