<?php

namespace Mariojgt\SkeletonAdmin\Middleware;

use Closure;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

/**
 * This middleware is used to check if the current request hits the API route.
 */
class BootTokenApi
{
    public function __construct(Application $app, Request $request)
    {
        $this->app = $app;
        $this->request = $request;
    }

    /**
     * Handle an incoming request.
     * This will check if the user has the permission to manage this.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // This Middleware where will check if the request has the right token
        // Since this is sensible information you app need to have the token define
        // in the config file for secure purpure
        // Returns header value with default as fallback
        //$request->header('some_header', 'default_value');
        if (empty($request->bearerToken())) {
            // Case missing token
            return response()->json([
                'data' => 'Boot token missing or invalid',
            ], 401);
        } else {
            if ($request->bearerToken() == config('skeleton.boot_token')) {
                // On Sucess
                return $next($request);
            } else {
                // Case the token not match
                return response()->json([
                    'data' => 'Token Not Valid',
                ], 401);
            }
        }
    }
}
