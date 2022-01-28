<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Mariojgt\UnityAdmin\Models\Navigation;
use Mariojgt\UnityAdmin\Models\Configuration;

class SystemHelper
{
    /**
     * Cache forever all the config
     *
     */
    public static function configGenerator()
    {
        cache()->rememberForever('configuration', function () {
            $dbConfig = null;
            foreach (Configuration::pluck('value', 'name') as $name => $value) {
                $dbConfig .= "'" . $name . "'" . '=>' . "'" . $value . "'" . ',';
            }
            $contents = "<?php
                return [
                    " . $dbConfig . "
                ];
            ";
            File::put(config_path('unityadmin.php'), $contents);
        });
    }

    /**
     * Rebuild the menu and cache forever
     */
    public static function adminMenuGenerator()
    {
        cache()->rememberForever('admin_panel_menu', function () {
            return cache()->remember('navigation-menu', '259200', function () {
                $navigation =  new Navigation();
                return $navigation->parent();
            });
        });
    }

    /**
     * This fuction will clear all the cache,routes and view an optimize for speed
     */
    public static function optimize()
    {
        // Clear all the site cache
        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        Artisan::call('view:clear');
        Artisan::call('route:clear');

        // Run optimization
        Artisan::call('config:cache');
        Artisan::call('view:cache');
        Artisan::call('route:cache');

        // Create the system configuration
        SystemHelper::configGenerator();
        SystemHelper::adminMenuGenerator();
    }
}
