<?php

namespace Mariojgt\SkeletonAdmin;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Notification;
use Mariojgt\SkeletonAdmin\Commands\Install;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Channels\DiscordChannel;
use Mariojgt\SkeletonAdmin\Services\PackageManager;
use Mariojgt\SkeletonAdmin\Services\ExtensionManager;
use Mariojgt\SkeletonAdmin\Listeners\SendUserVerifyListener;

class SkeletonAdminProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot(): void
    {
        $this->registerEvents();
        $this->loadPackageResources();
        $this->registerNotificationChannels();
    }

    /**
     * Register the application services.
     */
    public function register(): void
    {
        $this->registerPublishables();
    }

    /**
     * Register package events and listeners
     */
    protected function registerEvents(): void
    {
        Event::listen(
            UserVerifyEvent::class,
            [SendUserVerifyListener::class, 'handle']
        );
    }

    /**
     * Load all package resources
     */
    protected function loadPackageResources(): void
    {
        $this->loadCommands();
        $this->loadMiddleware();
        $this->loadViews();
        $this->loadRoutes();
        $this->loadMigrations();
    }

    /**
     * Load package views
     */
    protected function loadViews(): void
    {
        $this->loadViewsFrom(__DIR__ . '/Resources/Views', 'skeleton-admin');
    }

    /**
     * Load package routes in organized manner
     */
    protected function loadRoutes(): void
    {
        $routeGroups = [
            'backend' => [
                'web' => __DIR__ . '/Routes/Backend/web',
                'api' => __DIR__ . '/Routes/Backend/api',
            ],
            'frontend' => [
                'web' => __DIR__ . '/Routes/Frontend/web',
                'api' => __DIR__ . '/Routes/Frontend/api',
            ]
        ];

        foreach ($routeGroups as $section => $types) {
            foreach ($types as $type => $path) {
                $this->loadRoutesFromDirectory($path);
            }
        }
    }

    /**
     * Load routes from directory
     */
    protected function loadRoutesFromDirectory(string $directory): void
    {
        if (!is_dir($directory)) {
            return;
        }

        $routeFiles = glob($directory . '/*.php');
        foreach ($routeFiles as $routeFile) {
            $this->loadRoutesFrom($routeFile);
        }
    }

    /**
     * Load package migrations
     */
    protected function loadMigrations(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/Database/Migrations');
    }

    /**
     * Register notification channels
     */
    protected function registerNotificationChannels(): void
    {
        Notification::extend('discord', function ($app) {
            return new DiscordChannel();
        });
    }

    /**
     * Load and register middleware
     */
    protected function loadMiddleware(): void
    {
        $middlewares = [
            'skeleton_guest' => \Mariojgt\SkeletonAdmin\Middleware\SkeletonGuest::class,
            'recaptcha' => \Mariojgt\SkeletonAdmin\Middleware\ValidateRecaptcha::class,
        ];

        foreach ($middlewares as $alias => $middleware) {
            $this->app['router']->aliasMiddleware($alias, $middleware);
        }
    }

    /**
     * Auto-discover and load commands
     */
    protected function loadCommands(): void
    {
        if (!$this->app->runningInConsole()) {
            return;
        }

        $commandsPath = __DIR__ . '/Commands';
        if (!is_dir($commandsPath)) {
            return;
        }

        try {
            $commandClasses = [];
            $files = glob($commandsPath . '/*.php');

            foreach ($files as $file) {
                if (!is_file($file)) {
                    continue;
                }

                $className = basename($file, '.php');
                $fullClassName = "Mariojgt\\SkeletonAdmin\\Commands\\{$className}";

                // Check if class exists and is a valid command
                if (class_exists($fullClassName)) {
                    $reflection = new \ReflectionClass($fullClassName);

                    // Ensure it's a command class and not abstract
                    if (!$reflection->isAbstract() &&
                        $reflection->isSubclassOf(\Illuminate\Console\Command::class)) {
                        $commandClasses[] = $fullClassName;
                    }
                }
            }

            if (!empty($commandClasses)) {
                $this->commands($commandClasses);
            }
        } catch (\Exception $e) {
            // Log error but don't break the application
            if (app()->bound('log')) {
                app('log')->warning('Failed to load Skeleton Admin commands: ' . $e->getMessage());
            }
        }
    }

    /**
     * Register publishable assets with tags
     */
    protected function registerPublishables(): void
    {
        // Configuration files
        $this->publishes([
            __DIR__ . '/../Publish/Config/' => config_path(''),
        ], 'skeleton-admin-config');

        // Middleware files
        $this->publishes([
            __DIR__ . '/../Publish/InertiaRequest/handleRequest' => app_path('Http/Middleware'),
        ], 'skeleton-admin-middleware');

        // View files
        $this->publishes([
            __DIR__ . '/../Publish/InertiaRequest/appLayout' => resource_path('views/skeleton-admin'),
        ], 'skeleton-admin-views');

        // NPM configuration
        $this->publishes([
            __DIR__ . '/../Publish/Npm' => base_path(),
        ], 'skeleton-admin-npm');

        // Resources
        $this->publishes([
            __DIR__ . '/../Publish/Resource' => resource_path('vendor/SkeletonAdmin/'),
        ], 'skeleton-admin-resources');

        // Public assets
        $this->publishes([
            __DIR__ . '/../Publish/Avatars' => public_path('assets/avatars'),
            __DIR__ . '/../Publish/Public' => public_path('vendor/Skeleton'),
        ], 'skeleton-admin-assets');

        // Bootstrap files
        $this->publishes([
            __DIR__ . '/../Publish/Bootstrap' => base_path('bootstrap'),
        ], 'skeleton-admin-bootstrap');

        // Helper files
        $this->publishes([
            __DIR__ . '/../Publish/Helpers' => app_path('Helpers'),
        ], 'skeleton-admin-helpers');
    }
}
