<?php

namespace Mariojgt\SkeletonAdmin;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
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

        $this->loadCommands();

        $this->loadMiddleware();

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

        // Publish the avatar folder
        $this->publishes([
            __DIR__ . '/../Publish/Avatars' => public_path('assets/avatars'),
        ]);

        // Publish the public folder with the css and javascript pre compile
        $this->publishes([
            __DIR__ . '/../Publish/Public' => public_path('vendor/Skeleton'),
            __DIR__ . '/../Publish/Boostrap' => base_path('bootstrap')
        ]);
    }

    /**
     * Load some custom middleware required by the package.
     */
    public function loadMiddleware()
    {
        $this->app['router']->aliasMiddleware(
            'skeleton_guest',
            \Mariojgt\SkeletonAdmin\Middleware\SkeletonGuest::class
        );

        $this->app['router']->aliasMiddleware(
            'recaptcha',
            \Mariojgt\SkeletonAdmin\Middleware\ValidateRecaptcha::class
        );
    }

    public function loadCommands() {
        // Autoload all the commands from the folder Commands
        if ($this->app->runningInConsole()) {
            $availableCommandsPath =  __DIR__ . '/Commands';
            // Now get all the commands classes
            $commandClasses = array_map(function ($path) {
                return 'Mariojgt\\SkeletonAdmin\\Commands\\' . basename($path, '.php');
            }, glob($availableCommandsPath . '/*.php'));
            $this->commands($commandClasses);
        }
    }
}
