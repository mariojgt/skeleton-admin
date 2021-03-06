<?php

namespace Mariojgt\SkeletonAdmin;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Mariojgt\SkeletonAdmin\Commands\Install;
use Mariojgt\SkeletonAdmin\Commands\Republish;
use Mariojgt\SkeletonAdmin\Commands\RebuildMenu;
use Mariojgt\SkeletonAdmin\Commands\TestNotification;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Listeners\SendUserVerifyListener;

class SkeletonAdminProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        // Event for when you create a new user
        Event::listen(
            UserVerifyEvent::class,
            [SendUserVerifyListener::class, 'handle']
        );

        // Load Required commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                Republish::class,
                Install::class,
                TestNotification::class,
                RebuildMenu::class,
            ]);
        }

        // Load custom middlewares
        $this->middleware();

        // Load skeleton views
        $this->loadViewsFrom(__DIR__ . '/views', 'skeleton-admin');

        // Load backend routes
        $this->loadRoutesFrom(__DIR__ . '/Routes/Backend/web/web.php');
        $this->loadRoutesFrom(__DIR__ . '/Routes/Backend/web/auth.php');
        $this->loadRoutesFrom(__DIR__ . '/Routes/Backend/api/api.php');
        // Load frontend routes
        $this->loadRoutesFrom(__DIR__ . '/Routes/Frontend/web/auth.php');
        $this->loadRoutesFrom(__DIR__ . '/Routes/Frontend/web/web.php');
        $this->loadRoutesFrom(__DIR__ . '/Routes/Frontend/api/api.php');

        // Load Migrations
        $this->loadMigrationsFrom(__DIR__ . '/Database/Migrations');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->publish();
    }

    /**
     * This function will publish the package assets.
     */
    public function publish()
    {
        // Publish the public folder
        $this->publishes([
            __DIR__ . '/../Publish/Config/' => config_path(''),
        ]);

        // Publish the kernel stuff
        $this->publishes([
            __DIR__ . '/../Publish/InersiaRequest/kernel' => base_path('app/Http/'),
        ]);

        // Publish the inertia request stuff
        $this->publishes([
            __DIR__ . '/../Publish/InersiaRequest/handleRequest' => app_path('Http/Middleware'),
        ]);

        // Publish the inertia helpers
        // $this->publishes([
        //     __DIR__.'/../Publish/InersiaRequest/helpers' => app_path('Helpers/'),
        // ]);

        // Publish now view for the inertia were we going to render the page
        $this->publishes([
            __DIR__ . '/../Publish/InersiaRequest/appLayout' => resource_path('views/skeleton-admin'),
        ]);

        // Publish the npm
        $this->publishes([
            __DIR__ . '/../Publish/Npm' => base_path(),
        ]);

        // Publish the resource
        $this->publishes([
            __DIR__ . '/../Publish/Resource' => resource_path('vendor/SkeletonAdmin/'),
        ]);

        // Publish the public folder with the css and javascript pre compile
        $this->publishes([
            __DIR__ . '/../Publish/Public' => public_path('build/'),
        ]);
    }

    /**
     * Load some custom middleware required by the package.
     */
    public function middleware()
    {
        $this->app['router']->aliasMiddleware(
            'skeleton_guest',
            \Mariojgt\SkeletonAdmin\Middleware\SkeletonGuest::class
        );
    }
}
