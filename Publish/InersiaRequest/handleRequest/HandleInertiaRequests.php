<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'skeleton-admin.app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
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
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'flash' => $this->handleFlashMessage($request),
        ]);
    }

    /**
     * Handle the inersia request stuff
     *
     * @param Request $request
     *
     * @return [type]
     */
    public function handleFlashMessage(Request $request)
    {
        if ($request->session()->get('error')) {
            return [
                'type' => 'error',
                'message' => $request->session()->get('error'),
            ];
        }

        if ($request->session()->get('success')) {
            return [
                'type' => 'success',
                'message' => $request->session()->get('success'),
            ];
        }

        if ($request->session()->get('info')) {
            return [
                'type' => 'info',
                'message' => $request->session()->get('info'),
            ];
        }

        if ($request->session()->get('warning')) {
            return [
                'type' => 'warning',
                'message' => $request->session()->get('warning'),
            ];
        }
    }
}
