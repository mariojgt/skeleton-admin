<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Illuminate\Support\Facades\Http;

class SystemHelper
{
    public function localVersion()
    {
        $liveVersion  = $this->liveVersion();
        $localVersion = '1.0.2';
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
        $response = Http::get('https://repo.packagist.org/p/mariojgt/skeleton-admin.json');
        // Check if is a valid response
        if ($response->ok()) {
            // Get the body
            $body = $response->json();
            // Return the version
            return array_key_first($body['packages']['mariojgt/skeleton-admin']);
        } else {
            return '1.0.0';
        }
    }
}
