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
        // Install Sanctum
        Artisan::call('vendor:publish', [
            '--provider' => 'Laravel\Sanctum\SanctumServiceProvider',
            '--force'    => true,
        ]);

        // Install the castle package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Castle\CastleProvider',
            '--force'    => true,
        ]);

        // The cookie package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Biscotto\BiscottoProvider',
            '--force'    => true,
        ]);

        // Publish spatie permission
        Artisan::call('vendor:publish', [
            '--provider' => 'Spatie\Permission\PermissionServiceProvider',
            '--force'    => true,
        ]);

        // Publish the builder package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Builder\BuilderProvider',
            '--force'    => true,
        ]);

        // Copy the need file to make the skeleton to work
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\SkeletonAdmin\SkeletonAdminProvider',
            '--force'    => true,
        ]);

        // Migrate
        Artisan::call('migrate');

        // Run the database seeder
        Artisan::call('db:seed', [
            '--class' => 'Mariojgt\SkeletonAdmin\Database\Seeder\PermissionSeeder',
        ]);

        // Cache the routes
        Artisan::call('optimize:clear');

        $this->newLine();
        $this->info('The command was successful!');
    }
}
