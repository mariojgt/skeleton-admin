<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Mariojgt\Magnifier\Controllers\MediaFolderController;

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
        // Delete the file if exist
        $userMigration = 'database/migrations/2014_10_12_000000_create_users_table.php';
        if (file_exists(base_path($userMigration))) {
            unlink(base_path($userMigration));
        }

        // Call the function that will publish all the packages files
        $this->publishPackages();

        // Migrate
        Artisan::call('migrate');

        // Run the seeder
        $this->runSeeders();

        // Cache the routes
        Artisan::call('optimize:clear');

        $this->newLine();
        $this->info('The command was successful!');
    }

    /**
     * Run the seeders required for the skeleton-admin
     *
     */
    private function runSeeders()
    {
        // Run the database seeder
        Artisan::call('db:seed', [
            '--class' => 'Mariojgt\SkeletonAdmin\Database\Seeder\RolesPermissionSeeder',
        ]);

        // Run the naviation seeder
        Artisan::call('db:seed', [
            '--class' => 'Mariojgt\SkeletonAdmin\Database\Seeder\NavigationSeeder',
        ]);
    }

    /**
     * Publish the related packages
     */
    private function publishPackages()
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

        // Publish the media library package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Magnifier\MagnifierProvider',
            '--force'    => true,
        ]);
        // Call migrations
        Artisan::call('migrate');

        $mediaManager = new MediaFolderController();
        $mediaManager->makeFolder('media');

        // Copy the need file to make the skeleton to work
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\SkeletonAdmin\SkeletonAdminProvider',
            '--force'    => true,
        ]);
    }
}
