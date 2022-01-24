<?php

namespace Mariojgt\SkeletonAdmin\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class SkeletonAdmin
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
        if (Auth::guard('admin_auth')->check()) {
            return $next($request);
        }

        return redirect(route('skeleton-admin.home'));
    }
}
