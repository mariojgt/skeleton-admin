<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Pusher\Pusher;

class PusherHelper
{
    // Source https://pusher.com/docs/channels/server_api/overview
    // you need to install "pusher/pusher-php-server": "^4.1",
    public function __construct()
    {
        $this->APP_KEY = 'mariojgtrock';
        $this->APP_SECRET = 'mariojgtsecret';
        $this->APP_ID = '1995';

        $this->pusher = new Pusher(
            $this->APP_KEY,
            $this->APP_SECRET,
            $this->APP_ID,
            [
                'cluster'      => env('PUSHER_APP_CLUSTER'),
                'host'         => 'live.unityadmin.net', // This is Important if not using the official
                'port'         => 6001, // Portal defaul 443
                'useTLS'       => true,
                'encrypted'    => true, // if without ssl them false
                'scheme'       => 'https', // Typo of connection
                'curl_options' => [
                    CURLOPT_SSL_VERIFYHOST => 0, // Required to work with ssl
                    CURLOPT_SSL_VERIFYPEER => 0, // Required to work with ssl
                ],
            ]
        );
    }

    public function send()
    {
        $data = $this->pusher->trigger('my-channel', 'my-event', ['message' => 'data']);

        if ($data) {
            return ['status' => true];
        } else {
            return ['status' => false];
        }
    }

    public function sendBatch()
    {
        // Example
        $batch = [];
        $batch[] = [
            'channel' => 'my-channel-1',
            'name'    => 'my-event-1',
            'data'    => ['hello' => 'world'],
        ];

        $data = $this->pusher->triggerBatch($batch);

        if ($data) {
            return ['status' => true];
        } else {
            return ['status' => false];
        }
    }

    public function multipleChannel()
    {
        $data = $this->pusher->trigger(
            [
                'my-channel-1',
                'my-channel-2',
                'my-channel-3',
            ],
            'my-event',
            [
                'message' => 'hello world',
                'message' => 'hello world2',
                'message' => 'hello world3',
            ]
        );

        if ($data) {
            return ['status' => true];
        } else {
            return ['status' => false];
        }
    }
}
