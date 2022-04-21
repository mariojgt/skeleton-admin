<?php

return [
    // If disable users Can't register in the website
    // IF IN PRODUCTION CHANGE THIS TO FALSE
    'demo_enable' => true,

    // You can define multiple guards, if you want to use multiple guards
    'sucess_login_route' => [
        'web'            => 'user.home', // Route to redirect after login
        'skeleton_admin' => 'skeleton-admin.home', // Example
    ],
    // If true means that the session can expire and will ask the autentication again
    'castle_session_can_expire' => true,
    // Castle wall middlewhere session time, means how long the session can be active
    'castle_wall_session_time'  => 60,
];
