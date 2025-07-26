<?php

namespace Mariojgt\SkeletonAdmin\Middleware;

use Closure;

/**
 * Skeleton admin guest middleware, will manage the backend and make sure the user is not login.
 */
class SkeletonGuest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check if the user is a backend guest
        if (backendGuard()->check()) {
            return redirect(route('skeleton-admin.home'));
        }

        return $next($request);
    }
}
