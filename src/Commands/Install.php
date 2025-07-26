<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth\RegisterController as BackendRegisterController;
use Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth\RegisterController as FrontendRegisterController;
use Mariojgt\SkeletonAdmin\Database\Seeder\NavbarSeeder;
use Mariojgt\SkeletonAdmin\Database\Seeder\NavigationSeeder;
use Mariojgt\SkeletonAdmin\Database\Seeder\RolesPermissionSeeder;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Services\InstallationService;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'skeleton-admin:install
                            {--force : Force installation without confirmation}
                            {--skip-migrations : Skip migration reset}
                            {--skip-npm : Skip NPM package installation}
                            {--admin-email=admin@example.com : Admin email address}';

    /**
     * The console command description.
     */
    protected $description = 'Install Skeleton Admin package with all dependencies';

    /**
     * Installation service instance
     */
    protected InstallationService $installationService;

    /**
     * Installation steps with their descriptions
     */
    protected array $installationSteps = [
        'checking_requirements' => 'Checking system requirements',
        'cleaning_migrations' => 'Cleaning existing migrations',
        'publishing_dependencies' => 'Publishing package dependencies',
        'running_migrations' => 'Running database migrations',
        'running_seeders' => 'Running database seeders',
        'creating_users' => 'Creating default admin and user accounts',
        'finalizing' => 'Finalizing installation',
    ];

    /**
     * Create a new command instance.
     */
    public function __construct(InstallationService $installationService)
    {
        parent::__construct();
        $this->installationService = $installationService;
    }

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        try {
            $this->displayWelcome();

            if (! $this->confirmInstallation()) {
                $this->info('Installation cancelled.');

                return self::SUCCESS;
            }

            $this->performInstallation();
            $this->displaySuccess();

            return self::SUCCESS;
        } catch (Exception $e) {
            $this->displayError($e);

            return self::FAILURE;
        }
    }

    /**
     * Display welcome message
     */
    protected function displayWelcome(): void
    {
        $this->info('╔══════════════════════════════════════════════════════════╗');
        $this->info('║                Skeleton Admin Installer                  ║');
        $this->info('║                                                          ║');
        $this->info('║  This will install Skeleton Admin with all dependencies ║');
        $this->info('╚══════════════════════════════════════════════════════════╝');
        $this->newLine();
    }

    /**
     * Confirm installation with user
     */
    protected function confirmInstallation(): bool
    {
        if ($this->option('force')) {
            return true;
        }

        $this->warn('⚠️  This installation will:');
        $this->line('   • Reset your database migrations');
        $this->line('   • Publish package files (may overwrite existing files)');
        $this->line('   • Install NPM dependencies');
        $this->line('   • Create default admin and user accounts');
        $this->newLine();

        return $this->confirm('Do you want to continue?', false);
    }

    /**
     * Perform the complete installation process
     */
    protected function performInstallation(): void
    {
        $progressBar = $this->output->createProgressBar(count($this->installationSteps));
        $progressBar->setFormat(' %current%/%max% [%bar%] %percent:3s%% -- %message%');
        $progressBar->start();

        foreach ($this->installationSteps as $step => $description) {
            $progressBar->setMessage($description);
            $this->executeInstallationStep($step);
            $progressBar->advance();
            sleep(1); // Small delay for better UX
        }

        $progressBar->finish();
        $this->newLine(2);
    }

    /**
     * Execute individual installation step
     */
    protected function executeInstallationStep(string $step): void
    {
        switch ($step) {
            case 'checking_requirements':
                $this->checkRequirements();
                break;
            case 'cleaning_migrations':
                if (! $this->option('skip-migrations')) {
                    $this->cleanMigrations();
                }
                break;
            case 'publishing_dependencies':
                $this->publishDependencies();
                break;
            case 'running_migrations':
                $this->runMigrations();
                break;
            case 'running_seeders':
                $this->runSeeders();
                break;
            case 'creating_users':
                $this->createDefaultUsers();
                break;
            case 'finalizing':
                $this->finalizeInstallation();
                break;
        }
    }

    /**
     * Check system requirements
     */
    protected function checkRequirements(): void
    {
        $requirements = [
            'PHP >= 8.1' => version_compare(PHP_VERSION, '8.1.0', '>='),
            'Laravel >= 10.0' => version_compare(app()->version(), '10.0.0', '>='),
            'Composer installed' => $this->isComposerInstalled(),
        ];

        foreach ($requirements as $requirement => $met) {
            if (! $met) {
                throw new Exception("Requirement not met: {$requirement}");
            }
        }
    }

    /**
     * Check if Composer is installed
     */
    protected function isComposerInstalled(): bool
    {
        return ! empty(shell_exec('which composer'));
    }

    /**
     * Clean existing migrations safely
     */
    protected function cleanMigrations(): void
    {
        $migrationsPath = database_path('migrations');

        if (! File::isDirectory($migrationsPath)) {
            File::makeDirectory($migrationsPath, 0755, true);

            return;
        }

        // Backup existing migrations
        $backupPath = database_path('migrations_backup_'.date('Y_m_d_H_i_s'));
        File::copyDirectory($migrationsPath, $backupPath);

        // Clean migrations
        File::cleanDirectory($migrationsPath);

        // Fresh migrate
        Artisan::call('migrate:fresh', ['--force' => true]);
    }

    /**
     * Publish all package dependencies
     */
    protected function publishDependencies(): void
    {
        $packages = [
            'Laravel\Sanctum\SanctumServiceProvider',
            'Mariojgt\Castle\CastleProvider',
            'Mariojgt\Biscotto\BiscottoProvider',
            'Spatie\Permission\PermissionServiceProvider',
            'Mariojgt\Builder\BuilderProvider',
            'Mariojgt\Magnifier\MagnifierProvider',
            'Mariojgt\SkeletonAdmin\SkeletonAdminProvider',
        ];

        foreach ($packages as $package) {
            try {
                Artisan::call('vendor:publish', [
                    '--provider' => $package,
                    '--force' => true,
                ]);
            } catch (Exception $e) {
                $this->warn("Warning: Could not publish {$package}: ".$e->getMessage());
            }
        }

        // Install NPM packages if not skipped
        if (! $this->option('skip-npm')) {
            $this->installNpmPackages();
        }
    }

    /**
     * Install NPM packages
     */
    protected function installNpmPackages(): void
    {
        if (File::exists(base_path('package.json'))) {
            exec('npm install 2>&1', $output, $returnCode);
            if ($returnCode !== 0) {
                $this->warn('NPM installation failed. You may need to run "npm install" manually.');
            }
        }
    }

    /**
     * Run database migrations
     */
    protected function runMigrations(): void
    {
        Artisan::call('migrate', ['--force' => true]);

        // Create default media folder if Magnifier is available
        if (class_exists('Mariojgt\Magnifier\Controllers\MediaFolderController')) {
            try {
                $mediaManager = new \Mariojgt\Magnifier\Controllers\MediaFolderController;
                $mediaManager->makeFolder('media');
            } catch (Exception $e) {
                $this->warn('Could not create media folder: '.$e->getMessage());
            }
        }
    }

    /**
     * Run package seeders
     */
    protected function runSeeders(): void
    {
        $seeders = [
            RolesPermissionSeeder::class,
            NavigationSeeder::class,
            NavbarSeeder::class,
        ];

        foreach ($seeders as $seeder) {
            try {
                Artisan::call('db:seed', [
                    '--class' => $seeder,
                    '--force' => true,
                ]);
            } catch (Exception $e) {
                $this->warn("Warning: Could not run seeder {$seeder}: ".$e->getMessage());
            }
        }
    }

    /**
     * Create default admin and user accounts
     */
    protected function createDefaultUsers(): void
    {
        $adminEmail = $this->option('admin-email');
        $credentials = [];

        try {
            // Create admin user
            $adminPassword = $this->createAdminUser($adminEmail);
            $credentials['admin'] = [
                'email' => $adminEmail,
                'password' => $adminPassword,
            ];

            // Create regular user
            $userPassword = $this->createRegularUser($adminEmail);
            $credentials['user'] = [
                'email' => $adminEmail,
                'password' => $userPassword,
            ];

            // Save credentials to file
            $this->saveCredentialsToFile($credentials);

        } catch (Exception $e) {
            $this->warn('Could not create default users: '.$e->getMessage());
        }
    }

    /**
     * Create admin user
     */
    protected function createAdminUser(string $email): string
    {
        $password = Str::random(12);
        $request = new Request([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'email' => $email,
            'password' => $password,
            'password_confirmation' => $password,
        ]);

        $controller = new BackendRegisterController;
        $controller->userRegister($request);

        return $password;
    }

    /**
     * Create regular user
     */
    protected function createRegularUser(string $email): string
    {
        $password = Str::random(12);
        $request = new Request([
            'username' => 'user_'.Str::random(6),
            'first_name' => 'Regular',
            'last_name' => 'User',
            'email' => 'user_'.$email,
            'password' => $password,
            'password_confirmation' => $password,
        ]);

        $controller = new FrontendRegisterController;
        $controller->userRegister($request);

        // Verify email automatically
        $user = Admin::where('email', 'user_'.$email)->first();
        if ($user) {
            $user->email_verified_at = now();
            $user->save();
        }

        return $password;
    }

    /**
     * Save user credentials to file
     */
    protected function saveCredentialsToFile(array $credentials): void
    {
        $content = "Skeleton Admin - Default User Credentials\n";
        $content .= 'Generated on: '.now()->toDateTimeString()."\n\n";

        foreach ($credentials as $type => $creds) {
            $content .= strtoupper($type)." USER:\n";
            $content .= 'Email: '.$creds['email']."\n";
            $content .= 'Password: '.$creds['password']."\n\n";
        }

        $content .= "⚠️  Please change these passwords after first login!\n";
        $content .= "⚠️  Delete this file after noting the credentials!\n";

        File::put(base_path('skeleton-admin-credentials.txt'), $content);
    }

    /**
     * Finalize installation
     */
    protected function finalizeInstallation(): void
    {
        // Clear all caches
        Artisan::call('optimize:clear');

        // Cache routes and config for production
        if (app()->environment('production')) {
            Artisan::call('route:cache');
            Artisan::call('config:cache');
        }
    }

    /**
     * Display success message
     */
    protected function displaySuccess(): void
    {
        $this->info('🎉 Skeleton Admin has been successfully installed!');
        $this->newLine();

        $this->info('📋 Next Steps:');
        $this->line('   1. Check skeleton-admin-credentials.txt for login details');
        $this->line('   2. Visit your application to test the installation');
        $this->line('   3. Change default passwords');
        $this->line('   4. Delete the credentials file');
        $this->newLine();

        if (File::exists(base_path('skeleton-admin-credentials.txt'))) {
            $this->info('🔑 Default credentials saved to: skeleton-admin-credentials.txt');
        }
    }

    /**
     * Display error message
     */
    protected function displayError(Exception $e): void
    {
        $this->error('❌ Installation failed!');
        $this->error('Error: '.$e->getMessage());
        $this->newLine();

        $this->info('🔧 Troubleshooting:');
        $this->line('   1. Check your database connection');
        $this->line('   2. Ensure you have proper file permissions');
        $this->line('   3. Verify all required packages are installed');
        $this->line('   4. Check the Laravel log for more details');
    }
}
