<?php

return [
    // If disable users Can't register in the website
    // IF IN PRODUCTION CHANGE THIS TO FALSE
    'demo_enable' => true,

    // If disable users Can't register in the website
    'sucess_login_route' => 'skeleton-admin.home',
    // If true means that the session can expire and will ask the autentication again
    'castle_session_can_expire' => true,
    // Castle wall middlewhere session time, means how long the session can be active
    'castle_wall_session_time'  => 60,
];
