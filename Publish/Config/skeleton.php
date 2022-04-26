<?php

return [
    /**
     * If disable users Can't register in the website.
     */
    'frontend_register_enable' => true,
    /**
     * If true we goin to send an email to the user to verify his account.
     */
    'frontend_email_verify' => true,
    /**
     * Enable or disable backend register.
     */
    'backend_register_enable' => true,

    /**
     * The Boot Token is used in the pre api autentication
     * So we can prevent unwanted aplication ping your url.
     */
    'boot_token'      => 'admin',

    /**
     * In here for example you have have a admin guard login or a diferent user guard
     * default is web.
     */
    'user_guard' => 'web',

    /**
     * Routes prefix admin.
     */
    'route_prefix' => 'admin',

    /**
     * Routes prefix front end.
     */
    'route_prefix_front' => 'user',
];
