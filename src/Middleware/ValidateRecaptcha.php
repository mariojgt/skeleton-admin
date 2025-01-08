<?php

namespace Mariojgt\SkeletonAdmin\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ValidateRecaptcha
{
    public function handle(Request $request, Closure $next)
    {
        if (app()->environment('local')) {
            return $next($request);
        }

        $token = $request->input('recaptcha_token');

        if (!$token) {
            return response()->json(['error' => 'reCAPTCHA token is required'], 422);
        }

        $response = Http::post(config('services.google.recaptcha_endpoint') . config('services.google.recaptcha_api_key'), [
            'event' => [
                'token' => $token,
                'siteKey' => config('services.google.recaptcha_site_key'),
                'expectedAction' => 'submit'
            ]
        ]);

        if (!$response->successful() || !$response->json('tokenProperties.valid')) {
            return response()->json(['error' => 'Not a valid try again'], 422);
        }

        return $next($request);
    }
}
