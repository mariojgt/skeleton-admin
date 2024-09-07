<?php

use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Models\User;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\Navigation;
use Mariojgt\SkeletonAdmin\Models\Permission;

return [
    /**
     * If disable users Can't register in the website.
     */
    'frontend_register_enable' => true,
    /**
     * If true we going to send an email to the user to verify his account.
     */
    'frontend_email_verify'       => true,
    /**
     * Redirect after login, register, logout, verify for the front end.
     */
    'front_end_login_redirect'    => 'user.home',
    'front_end_logout_redirect'   => 'user.home',
    'front_end_register_redirect' => 'user.home',
    'front_end_verify_redirect'   => 'login',
    /**
     * Enable or disable backend register.
     */
    'backend_register_enable' => true,

    /**
     * The Boot Token is used in the pre api authentication
     * So we can prevent unwanted application ping your url.
     */
    'boot_token'      => 'admin',

    /**
     * In here for example you have have a admin guard login or a different user guard
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

    'backend_search_config' => [
        Admin::class => [
            'search_fiels' => [
                'first_name',
                'email',
            ],
            'route' => 'admin.edit',
            'pluck' => 'email',
        ],
        Role::class => [
            'search_fiels' => [
                'name',
            ],
            'route' => 'admin.role.edit',
            'pluck' => 'name',
        ],
        Permission::class => [
            'search_fiels' => [
                'name',
            ],
            'route' => 'admin.permission.index',
            'pluck' => 'name',
        ],
        Navigation::class => [
            'search_fiels' => [
                'menu_label',
            ],
            'route' => 'admin.navigation.index',
            'pluck' => 'menu_label',
        ],
        User::class => [
            'search_fiels' => [
                'first_name',
                'email',
            ],
            'route' => 'user.edit',
            'pluck' => 'email',
        ],
    ],

    'front_end_notification_user_model' => User::class,

    'themes' => [
        'forest',
        'master',
        'admin'
    ],

    'extra_profile_links' => []
];
