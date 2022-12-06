<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use Mariojgt\SkeletonAdmin\Models\Navigation;
use Mariojgt\SkeletonAdmin\Resource\Common\NavigationResource;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    public function rootView(Request $request): string
    {
        // Change the route to use the admin layout instead of the user layout.
        if ($request->route()->getPrefix() === 'admin') {
            return 'skeleton-admin.backend';
        } else {
            return 'skeleton-admin.frontend';
        }
    }

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function share(Request $request): array
    {
        // If the route is admin we can return different data.
        if ($request->route()->getPrefix() === 'admin') {
            return $this->backendShare($request);
        } else {
            return $this->frontendShare($request);
        }
    }

    /**
     * Return data for the inersia shared data for the backend.
     *
     * @param Request $request
     *
     * @return array [data]
     */
    private function backendShare(Request $request)
    {
        return array_merge(parent::share($request), [
            'flash'      => $this->handleFlashMessage($request),
            'app'        => config('app.name'),
            'navigation' => NavigationResource::collection(Navigation::where('guard', 'skeleton_admin')->whereNull('parent_id')->get()),
        ]);
    }

    /**
     * Return data for the inersia shared data for the frontend.
     *
     * @param Request $request
     *
     * @return array [data]
     */
    private function frontendShare(Request $request)
    {
        return array_merge(parent::share($request), [
            'flash' => $this->handleFlashMessage($request),
            'app'   => config('app.name'),
        ]);
    }

    /**
     * Handle the inersia request stuff.
     *
     * @param Request $request
     *
     * @return [type]
     */
    public function handleFlashMessage(Request $request)
    {
        // Return the flash error message.
        if ($request->session()->get('error')) {
            return [
                'type'    => 'error',
                'message' => $request->session()->get('error'),
            ];
        }
        // Return the flash success message.
        if ($request->session()->get('success')) {
            return [
                'type'    => 'success',
                'message' => $request->session()->get('success'),
            ];
        }
        // Return the flash info message.
        if ($request->session()->get('info')) {
            return [
                'type'    => 'info',
                'message' => $request->session()->get('info'),
            ];
        }
        // Return the flash warning message.
        if ($request->session()->get('warning')) {
            return [
                'type'    => 'warning',
                'message' => $request->session()->get('warning'),
            ];
        }
    }
}
