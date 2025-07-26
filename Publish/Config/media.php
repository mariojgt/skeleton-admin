<?php

return [
    'sizes' => [
        'default' => [
            'width' => 1920,
            'height' => 3000,
        ],
        'medium' => [
            'width' => 1400,
            'height' => 2000,
        ],
        'small' => [
            'width' => 800,
            'height' => 2000,
        ],
        'tiny' => [
            'width' => 400,
            'height' => 800,
        ],
        'thumbnail' => [
            'width' => 150,
            'height' => 300,
            // 'crop'   => true
        ],
    ],
    'use_webp' => true,
    'disk' => 'public',
    'public_path' => storage_path(),
    'default_folder' => 'app/public/media/',
    'default_size' => 'small',
    'img_fall_back' => '/magnifier.png',                           // path is images/imagename.png so the helper knows
    'no_image_id' => '1',
    'max_size' => '10048',
    'allowed' => 'csv,txt,xlx,xls,pdf,jpeg,png,gif,webp',
    'magnifier_middleware' => ['skeleton_admin', '2fa:skeleton_admin'],   // 'auth' or 'guest' or 'admin' or 'web' or 'api' or 'cli' or 'any'
];
