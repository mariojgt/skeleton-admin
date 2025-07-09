<?php

namespace Mariojgt\SkeletonAdmin\Services;

use Exception;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;

class InstallationService
{
    /**
     * Package configuration
     */
    protected array $config = [];

    /**
     * Installation status
     */
    protected array $status = [];

    public function __construct()
    {
        $this->config = Config::get('skeleton-admin', []);
    }

    /**
     * Check if the package is already installed
     */
    public function isInstalled(): bool
    {
        return File::exists(base_path('.skeleton-admin-installed'));
    }

    /**
     * Mark package as installed
     */
    public function markAsInstalled(): void
    {
        File::put(base_path('.skeleton-admin-installed'), json_encode([
            'installed_at' => now()->toISOString(),
            'version' => $this->getPackageVersion(),
        ]));
    }

    /**
     * Get package version
     */
    public function getPackageVersion(): string
    {
        $composerFile = base_path('vendor/mariojgt/skeleton-admin/composer.json');

        if (File::exists($composerFile)) {
            $composer = json_decode(File::get($composerFile), true);
            return $composer['version'] ?? 'unknown';
        }

        return 'unknown';
    }

    /**
     * Verify system requirements
     */
    public function verifyRequirements(): array
    {
        $requirements = [
            'php_version' => [
                'description' => 'PHP >= 8.1',
                'satisfied' => version_compare(PHP_VERSION, '8.1.0', '>='),
                'current' => PHP_VERSION,
            ],
            'laravel_version' => [
                'description' => 'Laravel >= 10.0',
                'satisfied' => version_compare(app()->version(), '10.0.0', '>='),
                'current' => app()->version(),
            ],
            'database_connection' => [
                'description' => 'Database connection',
                'satisfied' => $this->testDatabaseConnection(),
                'current' => Config::get('database.default'),
            ],
            'storage_writable' => [
                'description' => 'Storage directory writable',
                'satisfied' => is_writable(storage_path()),
                'current' => storage_path(),
            ],
            'public_writable' => [
                'description' => 'Public directory writable',
                'satisfied' => is_writable(public_path()),
                'current' => public_path(),
            ],
        ];

        return $requirements;
    }

    /**
     * Test database connection
     */
    protected function testDatabaseConnection(): bool
    {
        try {
            \DB::connection()->getPdo();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    /**
     * Get list of required packages
     */
    public function getRequiredPackages(): array
    {
        return [
            'laravel/sanctum' => 'Laravel\Sanctum\SanctumServiceProvider',
            'spatie/laravel-permission' => 'Spatie\Permission\PermissionServiceProvider',
            'mariojgt/castle' => 'Mariojgt\Castle\CastleProvider',
            'mariojgt/biscotto' => 'Mariojgt\Biscotto\BiscottoProvider',
            'mariojgt/builder' => 'Mariojgt\Builder\BuilderProvider',
            'mariojgt/magnifier' => 'Mariojgt\Magnifier\MagnifierProvider',
        ];
    }

    /**
     * Verify required packages are installed
     */
    public function verifyPackages(): array
    {
        $packages = $this->getRequiredPackages();
        $status = [];

        foreach ($packages as $package => $provider) {
            $status[$package] = [
                'installed' => class_exists($provider),
                'provider' => $provider,
            ];
        }

        return $status;
    }

    /**
     * Create backup of important files
     */
    public function createBackup(): string
    {
        $backupDir = storage_path('backups/skeleton-admin-' . date('Y-m-d-H-i-s'));
        File::makeDirectory($backupDir, 0755, true);

        $filesToBackup = [
            'config' => config_path(),
            'migrations' => database_path('migrations'),
            'public' => public_path('assets'),
        ];

        foreach ($filesToBackup as $name => $path) {
            if (File::exists($path)) {
                File::copyDirectory($path, $backupDir . '/' . $name);
            }
        }

        return $backupDir;
    }

    /**
     * Publish package assets with error handling
     */
    public function publishPackageAssets(string $provider, bool $force = true): bool
    {
        try {
            Artisan::call('vendor:publish', [
                '--provider' => $provider,
                '--force' => $force,
            ]);
            return true;
        } catch (Exception $e) {
            $this->status['errors'][] = "Failed to publish {$provider}: " . $e->getMessage();
            return false;
        }
    }

    /**
     * Run specific seeder with error handling
     */
    public function runSeeder(string $seederClass): bool
    {
        try {
            Artisan::call('db:seed', [
                '--class' => $seederClass,
                '--force' => true,
            ]);
            return true;
        } catch (Exception $e) {
            $this->status['errors'][] = "Failed to run seeder {$seederClass}: " . $e->getMessage();
            return false;
        }
    }

    /**
     * Clear all Laravel caches
     */
    public function clearCaches(): void
    {
        $commands = [
            'config:clear',
            'route:clear',
            'view:clear',
            'cache:clear',
        ];

        foreach ($commands as $command) {
            try {
                Artisan::call($command);
            } catch (Exception $e) {
                // Log but don't fail installation
                $this->status['warnings'][] = "Failed to run {$command}: " . $e->getMessage();
            }
        }
    }

    /**
     * Optimize Laravel for production
     */
    public function optimizeForProduction(): void
    {
        if (!app()->environment('production')) {
            return;
        }

        $commands = [
            'config:cache',
            'route:cache',
            'view:cache',
        ];

        foreach ($commands as $command) {
            try {
                Artisan::call($command);
            } catch (Exception $e) {
                $this->status['warnings'][] = "Failed to run {$command}: " . $e->getMessage();
            }
        }
    }

    /**
     * Get installation status
     */
    public function getStatus(): array
    {
        return $this->status;
    }

    /**
     * Reset installation status
     */
    public function resetStatus(): void
    {
        $this->status = [
            'errors' => [],
            'warnings' => [],
            'info' => [],
        ];
    }

    /**
     * Generate installation report
     */
    public function generateInstallationReport(): array
    {
        return [
            'installed_at' => now()->toISOString(),
            'package_version' => $this->getPackageVersion(),
            'laravel_version' => app()->version(),
            'php_version' => PHP_VERSION,
            'requirements' => $this->verifyRequirements(),
            'packages' => $this->verifyPackages(),
            'status' => $this->getStatus(),
        ];
    }

    /**
     * Save installation report
     */
    public function saveInstallationReport(array $report): void
    {
        $reportPath = storage_path('logs/skeleton-admin-installation.json');
        File::put($reportPath, json_encode($report, JSON_PRETTY_PRINT));
    }
}
