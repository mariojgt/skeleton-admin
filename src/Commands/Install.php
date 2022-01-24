<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Artisan;
use Illuminate\Console\Command;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'install:skeleton-admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the skeleton admin';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Copy the need file to make the skeleton to work
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\SkeletonAdmin\SkeletonAdminProvider',
            '--force'    => true,
        ]);

        // Copy the need file to make the laravel sanctum work
        Artisan::call('vendor:publish', [
            '--provider' => 'Laravel\Sanctum\SanctumServiceProvider',
            '--force'    => true,
        ]);

        // Migrate
        Artisan::call('migrate');
        // Cache the config
        Artisan::call('config:cache');
        // Cache the views
        Artisan::call('view:cache');
        // Cache the routes
        Artisan::call('route:cache');

        $this->newLine();
        $this->info('The command was successful!');
    }
}
