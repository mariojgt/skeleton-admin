<?php

namespace Mariojgt\SkeletonAdmin\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class SkeletonGuest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guard('skeleton_admin')->check()) {
            return redirect(route('skeleton-admin.home'));
        }
        return $next($request);
    }
}
