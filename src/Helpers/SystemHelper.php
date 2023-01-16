<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Illuminate\Support\Facades\Http;

class SystemHelper
{
    public function localVersion()
    {
        $liveVersion  = $this->liveVersion();
        $localVersion = '1.0.5';
        // Check if the local version is the same as the live version
        if ($liveVersion == $localVersion) {
            return [
                'version' => $localVersion,
                'update'  => false,
            ];
        } else {
            return [
                'version' => $localVersion,
                'live_version' => $liveVersion,
                'update' => true
            ];
        }
    }

    public function liveVersion()
    {
        $response = Http::get('https://api.github.com/repos/mariojgt/skeleton-admin/releases/latest');
        // Check if is a valid response
        if ($response->ok()) {
            // Get the body
            $body = $response->json();
            // Return the version
            return $body['name'];
        } else {
            return '1.0.0';
        }
    }
}
