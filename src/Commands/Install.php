<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Database\Seeder\NavbarSeeder;
use Mariojgt\Magnifier\Controllers\MediaFolderController;
use Mariojgt\SkeletonAdmin\Database\Seeder\NavigationSeeder;
use Mariojgt\SkeletonAdmin\Database\Seeder\RolesPermissionSeeder;
use Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth\RegisterController as BackendRegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\RegisterController as FrontendRegisterController;

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
        // Define the migrations folder path
        $migrationsPath = database_path('migrations');

        // Delete all the migration files
        $this->info('Deleting all the migration files...');
        $this->deleteMigrationFiles($migrationsPath);

        Artisan::call('migrate:fresh');

        // Call the function that will publish all the packages files
        $this->publishPackages();

        // Migrate
        Artisan::call('migrate');

        // Run the seeder
        $this->runSeeders();

        // Create the admin and user user
        $this->createFrontAndBackUser("admin@default.com");

        // Cache the routes
        Artisan::call('optimize:clear');

        $this->newLine();
        $this->info('The command was successful!');
    }

    /**
     * Delete all files in the specified directory.
     *
     * @param string $path
     * @return void
     */
    protected function deleteMigrationFiles(string $path)
    {
        if (!is_dir($path)) {
            $this->warn("The directory {$path} does not exist.");
            return;
        }

        $files = glob("{$path}/*.php");

        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file); // Delete the file
                $this->info("Deleted: {$file}");
            }
        }
    }

    /**
     * Run the seeders required for the skeleton-admin
     *
     */
    private function runSeeders()
    {
        // Run the database seeder
        Artisan::call('db:seed', [
            '--class' => RolesPermissionSeeder::class,
        ]);

        // Run the navigation seeder
        Artisan::call('db:seed', [
            '--class' => NavigationSeeder::class,
        ]);

        // Run the navigation seeder
        Artisan::call('db:seed', [
            '--class' => NavbarSeeder::class,
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
            '--force' => true,
        ]);

        // Install the castle package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Castle\CastleProvider',
            '--force' => true,
        ]);

        // The cookie package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Biscotto\BiscottoProvider',
            '--force' => true,
        ]);

        // Publish spatie permission
        Artisan::call('vendor:publish', [
            '--provider' => 'Spatie\Permission\PermissionServiceProvider',
            '--force' => true,
        ]);

        // Publish the builder package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Builder\BuilderProvider',
            '--force' => true,
        ]);

        // Publish the media library package
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\Magnifier\MagnifierProvider',
            '--force' => true,
        ]);

        // Call migrations
        Artisan::call('migrate');

        $mediaManager = new MediaFolderController();
        $mediaManager->makeFolder('media');

        // Copy the need file to make the skeleton to work
        Artisan::call('vendor:publish', [
            '--provider' => 'Mariojgt\SkeletonAdmin\SkeletonAdminProvider',
            '--force' => true,
        ]);
    }

    private function createFrontAndBackUser(string $userEmail): void
    {
        // Create the Admin user
        $request = new Request();
        $adminPassword = Str::random(10);
        $request->merge([
            'first_name'            => 'Admin',
            'last_name'             => 'Admin',
            'email'                 => $userEmail,
            'password'              => $adminPassword,
            'password_confirmation' => $adminPassword,
        ]);
        $registerController = new BackendRegisterController();
        $registerController->userRegister($request);
        $this->info('The Admin was created with the password: (' . $adminPassword . ')');

        // Create the User user
        $request = new Request();
        $userPassword = Str::random(10);
        $request->merge([
            'first_name'            => 'User',
            'last_name'             => 'User',
            'email'                 => $userEmail,
            'password'              => $userPassword,
            'password_confirmation' => $userPassword,
        ]);
        $registerController = new FrontendRegisterController();
        $registerController->userRegister($request);
        // Find the user and verify the email
        $user = Admin::where('email', $userEmail)->first();
        $user->email_verified_at = now();
        $user->save();
        $this->info('The User was created with the password: (' . $userPassword . ')');

        // Create a txt file with the user and password
        $file = fopen(base_path('user.txt'), 'w');
        fwrite($file, 'Admin: ' . $userEmail . ' Password: ' . $adminPassword . PHP_EOL);
        fwrite($file, 'User: ' . $userEmail . ' Password: ' . $userPassword . PHP_EOL);
        fclose($file);
    }
}
