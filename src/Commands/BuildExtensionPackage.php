<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Process;
use Symfony\Component\Console\Helper\ProgressBar;

/**
 * This command will create an extension package for Skeleton Admin
 * with improved user experience, validation, and error handling.
 */
class BuildExtensionPackage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'skeleton:extension-package
                            {--name= : Package name (e.g., blog-system)}
                            {--namespace= : Package namespace (e.g., Skeleton\\Blog\\)}
                            {--prefix= : Composer prefix (e.g., skeleton)}
                            {--description= : Package description}
                            {--controller= : Main controller name (e.g., Blog)}
                            {--force : Force overwrite existing package}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an extension package for Skeleton Admin with improved UX and validation';

    /**
     * Package configuration
     *
     * @var array
     */
    private array $config = [];

    /**
     * Progress bar instance
     *
     * @var ProgressBar
     */
    private ProgressBar $progressBar;

    /**
     * Create a new command instance.
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
    public function handle(): int
    {
        try {
            $this->displayWelcome();

            if (!$this->validateEnvironment()) {
                return 1;
            }

            $this->gatherConfiguration();

            if (!$this->confirmConfiguration()) {
                $this->warn('Package creation cancelled.');
                return 0;
            }

            $this->createPackage();

            $this->displaySuccess();

            return 0;
        } catch (\Exception $e) {
            $this->error('An error occurred: ' . $e->getMessage());
            $this->error('Stack trace: ' . $e->getTraceAsString());
            return 1;
        }
    }

    /**
     * Display welcome message and introduction
     */
    private function displayWelcome(): void
    {
        $this->info('🚀 Skeleton Admin Extension Package Generator');
        $this->info('==========================================');
        $this->newLine();
        $this->info('This tool will help you create a new extension package for Skeleton Admin.');
        $this->info('The package will include controllers, routes, views, and all necessary files.');
        $this->newLine();
    }

    /**
     * Validate the environment before proceeding
     */
    private function validateEnvironment(): bool
    {
        $errors = [];

        // Check if we're in a Laravel project
        if (!file_exists(base_path('artisan'))) {
            $errors[] = 'Not in a Laravel project root directory';
        }

        // Check if composer.json exists
        if (!file_exists(base_path('composer.json'))) {
            $errors[] = 'composer.json not found in project root';
        }

        // Check if packages directory exists or can be created
        $packagesDir = base_path('packages');
        if (!File::isDirectory($packagesDir) && !File::makeDirectory($packagesDir, 0755, true)) {
            $errors[] = 'Cannot create packages directory';
        }

        if (!empty($errors)) {
            $this->error('Environment validation failed:');
            foreach ($errors as $error) {
                $this->error('  • ' . $error);
            }
            return false;
        }

        return true;
    }

    /**
     * Gather configuration from user input or options
     */
    private function gatherConfiguration(): void
    {
        $this->config = [
            'package_name' => $this->getPackageName(),
            'namespace' => $this->getNamespace(),
            'composer_prefix' => $this->getComposerPrefix(),
            'description' => $this->getDescription(),
            'controller' => $this->getController(),
            'provider_name' => '', // Will be set based on package name
        ];

        // Generate provider name
        $this->config['provider_name'] = Str::studly($this->config['package_name']) . 'ServiceProvider';

        // Store the original namespace for different contexts
        $this->config['namespace'] = $this->normalizeNamespace($this->config['namespace']);
    }

    /**
     * Get package name with validation
     */
    private function getPackageName(): string
    {
        $name = $this->option('name') ?: $this->ask(
            'Package name (kebab-case, e.g., blog-system, user-management)',
            'skeleton-blog'
        );

        // Validate package name
        if (!preg_match('/^[a-z][a-z0-9-]*[a-z0-9]$/', $name)) {
            $this->error('Package name must be in kebab-case (lowercase, hyphens allowed)');
            return $this->getPackageName();
        }

        // Check if package already exists
        $packagePath = base_path('packages/' . $name);
        if (File::isDirectory($packagePath) && !$this->option('force')) {
            if (!$this->confirm("Package '{$name}' already exists. Overwrite?", false)) {
                return $this->getPackageName();
            }
        }

        return $name;
    }

    /**
     * Get namespace with validation
     */
    private function getNamespace(): string
    {
        $namespace = $this->option('namespace') ?: $this->ask(
            'Package namespace (e.g., Skeleton\\Blog\\, MyCompany\\Extensions\\)',
            'Skeleton\\Blog\\'
        );

        // Validate namespace
        if (!preg_match('/^[A-Z][A-Za-z0-9\\\\]+\\\\?$/', $namespace)) {
            $this->error('Namespace must be in PascalCase with backslashes (e.g., Skeleton\\Blog\\)');
            return $this->getNamespace();
        }

        return $namespace;
    }

    /**
     * Get composer prefix with validation
     */
    private function getComposerPrefix(): string
    {
        $prefix = $this->option('prefix') ?: $this->ask(
            'Composer prefix (lowercase, e.g., skeleton, mycompany)',
            'skeleton'
        );

        // Validate composer prefix
        if (!preg_match('/^[a-z][a-z0-9-]*[a-z0-9]$/', $prefix)) {
            $this->error('Composer prefix must be lowercase with optional hyphens');
            return $this->getComposerPrefix();
        }

        return $prefix;
    }

    /**
     * Get package description
     */
    public function getDescription(): string
    {
        return $this->option('description') ?: $this->ask(
            'Package description',
            'A Laravel extension package for Skeleton Admin'
        );
    }

    /**
     * Get controller name with validation
     */
    private function getController(): string
    {
        $controller = $this->option('controller') ?: $this->ask(
            'Main controller name (PascalCase, e.g., Blog, UserManagement)',
            'Blog'
        );

        // Validate controller name
        if (!preg_match('/^[A-Z][A-Za-z0-9]*$/', $controller)) {
            $this->error('Controller name must be in PascalCase');
            return $this->getController();
        }

        // Ensure it ends with 'Controller'
        if (!Str::endsWith($controller, 'Controller')) {
            $controller .= 'Controller';
        }

        return $controller;
    }

    /**
     * Normalize namespace format
     */
    private function normalizeNamespace(string $namespace): string
    {
        // Remove extra backslashes and ensure proper format
        $namespace = trim($namespace, '\\');
        $namespace = str_replace('/', '\\', $namespace);
        $namespace = preg_replace('/\\\\+/', '\\', $namespace);

        // For composer.json, we need single backslashes, not double
        return $namespace . '\\';
    }

    /**
     * Get namespace for different contexts
     */
    private function getNamespaceForContext(string $context = 'default'): string
    {
        $namespace = str_replace('\\\\', '\\', $this->config['namespace']);
        $namespace = rtrim($namespace, '\\');

        switch ($context) {
            case 'composer':
                // For composer.json, we need to escape backslashes for JSON
                return str_replace('\\', '\\\\', $namespace) . '\\\\';
            case 'php':
                // For PHP files, use single backslashes
                return $namespace . '\\';
            default:
                return $namespace . '\\';
        }
    }

    /**
     * Display configuration and ask for confirmation
     */
    private function confirmConfiguration(): bool
    {
        $this->info('📋 Package Configuration:');
        $this->table(
            ['Setting', 'Value'],
            [
                ['Package Name', $this->config['package_name']],
                ['Namespace (PHP)', $this->getNamespaceForContext('php')],
                ['Namespace (JSON)', $this->getNamespaceForContext('composer')],
                ['Composer Name', $this->config['composer_prefix'] . '/' . $this->config['package_name']],
                ['Description', $this->config['description']],
                ['Controller', $this->config['controller']],
                ['Provider', $this->config['provider_name']],
            ]
        );

        return $this->confirm('Proceed with package creation?', true);
    }

    /**
     * Create the package with progress tracking
     */
    private function createPackage(): void
    {
        $steps = [
            'Creating directory structure',
            'Generating composer.json',
            'Creating README.md',
            'Creating configuration file',
            'Generating service provider',
            'Creating controllers',
            'Setting up routes',
            'Creating views',
            'Generating commands',
            'Updating project composer.json',
            'Running composer update',
        ];

        $this->progressBar = $this->output->createProgressBar(count($steps));
        $this->progressBar->setFormat(' %current%/%max% [%bar%] %percent:3s%% %message%');

        foreach ($steps as $step) {
            $this->progressBar->setMessage($step);
            $this->executeStep($step);
            $this->progressBar->advance();
            usleep(100000); // Small delay for visual effect
        }

        $this->progressBar->finish();
        $this->newLine(2);
    }

    /**
     * Execute individual creation steps
     */
    private function executeStep(string $step): void
    {
        switch ($step) {
            case 'Creating directory structure':
                $this->createDirectoryStructure();
                break;
            case 'Generating composer.json':
                $this->createComposerFile();
                break;
            case 'Creating README.md':
                $this->createReadmeFile();
                break;
            case 'Creating configuration file':
                $this->createConfigFile();
                break;
            case 'Generating service provider':
                $this->createServiceProvider();
                break;
            case 'Creating controllers':
                $this->createControllers();
                break;
            case 'Setting up routes':
                $this->createRoutes();
                break;
            case 'Creating views':
                $this->createViews();
                break;
            case 'Generating commands':
                $this->createCommands();
                break;
            case 'Updating project composer.json':
                $this->updateProjectComposer();
                break;
            case 'Running composer update':
                $this->runComposerUpdate();
                break;
        }
    }

    /**
     * Create directory structure
     */
    private function createDirectoryStructure(): void
    {
        $packagePath = base_path('packages/' . $this->config['package_name']);
        $directories = [
            'src',
            'src/Controllers/Backend',
            'src/Controllers/Frontend',
            'src/Commands',
            'src/Routes/Backend/web',
            'src/Routes/Backend/api',
            'src/Routes/Frontend/web',
            'src/Routes/Frontend/api',
            'src/Database/Migrations',
            'src/Models',
            'src/Config',
            'src/Resources/views',
            'src/Resources/lang',
            'Publish/Resource',
            'Publish/Public',
            'Publish/Npm',
            'tests',
        ];

        foreach ($directories as $dir) {
            $fullPath = $packagePath . '/' . $dir;
            if (!File::isDirectory($fullPath)) {
                File::makeDirectory($fullPath, 0755, true);
            }
        }
    }

    /**
     * Create the package config file
     */
    private function createConfigFile(): void
    {
        $replace = [
            'variables' => ['{{name}}', '{{description}}'],
            'values' => [
                $this->config['package_name'],
                $this->config['description']
            ]
        ];

        $this->loadStubFileAndSave(
            'config',
            base_path('packages/' . $this->config['package_name'] . '/src/Config'),
            $this->config['package_name'],
            '.php',
            $replace
        );
    }

    /**
     * Create composer.json file
     */
    private function createComposerFile(): void
    {
        $replace = [
            'variables' => ['{{name}}', '{{description}}', '{{namespace}}', '{{provider}}'],
            'values' => [
                $this->config['composer_prefix'] . '/' . $this->config['package_name'],
                $this->config['description'],
                $this->getNamespaceForContext('composer'), // Use escaped backslashes for JSON
                $this->config['provider_name'],
            ]
        ];

        $this->loadStubFileAndSave(
            'composer',
            base_path('packages/' . $this->config['package_name']),
            'composer',
            '.json',
            $replace
        );
    }

    /**
     * Create README.md file
     */
    private function createReadmeFile(): void
    {
        $replace = [
            'variables' => ['{{name}}', '{{description}}'],
            'values' => [$this->config['package_name'], $this->config['description']]
        ];

        $this->loadStubFileAndSave(
            'README',
            base_path('packages/' . $this->config['package_name']),
            'README',
            '.md',
            $replace
        );
    }

    /**
     * Create service provider
     */
    private function createServiceProvider(): void
    {
        $namespace = $this->getNamespaceForContext('php');
        $namespaceWithTrailing = $this->getNamespaceForContext('php_with_trailing');

        $namespace = rtrim($namespace, '\\');
        // Debug: let's see what we're actually generating
        if ($this->option('verbose')) {
            $this->info("Debug: Creating service provider with namespace: '{$namespace}'");
            $this->info("Debug: Namespace with trailing: '{$namespaceWithTrailing}'");
        }

        $replace = [
            'variables' => ['{{namespace}}', '{{namespace_with_trailing}}', '{{provider}}', '{{name}}'],
            'values' => [
                $namespace, // Should be like "Skeleton\Store" (no trailing backslash)
                $namespaceWithTrailing, // Should be like "Skeleton\Store\" (with trailing backslash)
                $this->config['provider_name'],
                $this->config['package_name']
            ]
        ];

        $this->loadStubFileAndSave(
            'provider',
            base_path('packages/' . $this->config['package_name'] . '/src'),
            $this->config['provider_name'],
            '.php',
            $replace
        );
    }

    /**
     * Create controllers for both backend and frontend
     */
    private function createControllers(): void
    {
        $locations = ['Backend', 'Frontend'];

        foreach ($locations as $location) {
            $controller = $location . $this->config['controller'];

            $replace = [
                'variables' => ['{{name}}', '{{namespace}}', '{{location}}', '{{controller}}'],
                'values' => [
                    $this->config['package_name'],
                    $this->getNamespaceForContext('php'), // Single backslash for PHP files
                    $location,
                    $controller
                ]
            ];

            $this->loadStubFileAndSave(
                'controller',
                base_path('packages/' . $this->config['package_name'] . '/src/Controllers/' . $location),
                $controller,
                '.php',
                $replace
            );
        }
    }

    /**
     * Create routes for web and api
     */
    private function createRoutes(): void
    {
        $locations = ['Backend', 'Frontend'];
        $routeTypes = ['web', 'api'];

        foreach ($locations as $location) {
            foreach ($routeTypes as $routeType) {
                $controller = $location . $this->config['controller'];
                $routePrefix = $location === 'Backend' ? 'admin' : strtolower($this->config['package_name']);

                $replace = [
                    'variables' => [
                        '{{namespace}}', '{{name}}', '{{location}}',
                        '{{controller}}', '{{route_prefix}}', '{{location_lower}}'
                    ],
                    'values' => [
                        $this->getNamespaceForContext('php'), // Single backslash for PHP files
                        $this->config['package_name'],
                        $location,
                        $controller,
                        $routePrefix,
                        strtolower($location)
                    ]
                ];

                $this->loadStubFileAndSave(
                    $routeType . 'Route',
                    base_path('packages/' . $this->config['package_name'] . '/src/Routes/' . $location . '/' . $routeType),
                    $routeType,
                    '.php',
                    $replace
                );
            }
        }
    }

    /**
     * Create Vue.js views and components
     */
    private function createViews(): void
    {
        $locations = ['Backend', 'Frontend'];

        foreach ($locations as $location) {
            $locationLower = strtolower($location);
            $viewLayout = $location === 'Backend' ? '@backend_layout/App.vue' : '@frontend_layout/App.vue';
            $controller = $location . $this->config['controller'];
            $namespace = str_replace('\\\\', '\\', $this->config['namespace']);

            $replace = [
                'variables' => [
                    '{{namespace}}', '{{name}}', '{{location}}',
                    '{{controller}}', '{{page_layout}}'
                ],
                'values' => [
                    $namespace,
                    $this->config['package_name'],
                    $locationLower,
                    $controller,
                    $viewLayout
                ]
            ];

            // Create the main index view
            $viewPath = resource_path('vendor/SkeletonAdmin/js/' . $locationLower . '/Pages/Vendor/' . $this->config['package_name']);
            if (!File::isDirectory($viewPath)) {
                File::makeDirectory($viewPath, 0755, true);
            }

            $this->loadStubFileAndSave(
                'indexView',
                $viewPath,
                'index',
                '.vue',
                $replace
            );

            // Create the component directory and component file
            $componentPath = resource_path('vendor/SkeletonAdmin/js/' . $locationLower . '/Components/Vendor/' . $this->config['package_name']);
            if (!File::isDirectory($componentPath)) {
                File::makeDirectory($componentPath, 0755, true);
            }

            // Create the component based on location (frontend/backend)
            $componentStub = $location === 'Backend' ? 'vueComponentBackend' : 'vueComponentFrontend';
            $componentName = ucfirst($this->config['package_name']) . 'Component';

            $this->loadStubFileAndSave(
                $componentStub,
                $componentPath,
                $componentName,
                '.vue',
                $replace
            );

            // Create additional common views
            $this->createAdditionalViews($viewPath, $replace);
        }
    }

    /**
     * Create additional common views (create, edit, show)
     */
    private function createAdditionalViews(string $viewPath, array $replace): void
    {
        // You can add more view creation logic here for create, edit, show pages
        // For now, we'll create placeholder files

        $additionalViews = [
            'create' => 'Create New Item',
            'edit' => 'Edit Item',
            'show' => 'View Item Details'
        ];

        foreach ($additionalViews as $viewName => $title) {
            $basicViewContent = $this->getBasicViewTemplate($title, $replace['values'][1]);
            file_put_contents($viewPath . '/' . $viewName . '.vue', $basicViewContent);
        }
    }

    /**
     * Get a basic view template
     */
    private function getBasicViewTemplate(string $title, string $packageName): string
    {
        return <<<VUE
<template>
    <Layout>
        <div class="container mx-auto px-4 py-8">
            <div class="max-w-4xl mx-auto">
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                        {$title}
                    </h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">
                        {$packageName} - {$title}
                    </p>
                </div>

                <div class="card bg-base-100 shadow-lg">
                    <div class="card-body">
                        <p class="text-center text-gray-500 py-8">
                            This page is under development.
                        </p>

                        <div class="card-actions justify-center">
                            <Link href="javascript:history.back()" class="btn btn-outline">
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import Layout from '@backend_layout/App.vue' // Change based on location

const props = defineProps({
    title: {
        type: String,
        default: '{$title}'
    }
})
</script>
VUE;
    }

    /**
     * Create install and republish commands
     */
    private function createCommands(): void
    {
        // Create install command
        $installReplace = [
            'variables' => ['{{namespace}}', '{{name}}', '{{provider}}'],
            'values' => [
                $this->getNamespaceForContext('php'), // Single backslash for PHP files
                $this->config['package_name'],
                $this->config['provider_name']
            ]
        ];

        $this->loadStubFileAndSave(
            'InstallCommand',
            base_path('packages/' . $this->config['package_name'] . '/src/Commands'),
            'Install',
            '.php',
            $installReplace
        );

        // Create republish command
        $republishReplace = [
            'variables' => ['{{namespace}}', '{{name}}'],
            'values' => [
                $this->getNamespaceForContext('php'), // Single backslash for PHP files
                $this->config['package_name']
            ]
        ];

        $this->loadStubFileAndSave(
            'republishCommand',
            base_path('packages/' . $this->config['package_name'] . '/src/Commands'),
            'Republish',
            '.php',
            $republishReplace
        );
    }

    /**
     * Update the main project's composer.json
     */
    private function updateProjectComposer(): void
    {
        $composerPath = base_path('composer.json');
        $packageName = $this->config['composer_prefix'] . '/' . $this->config['package_name'];

        $this->newLine();
        $this->info('📝 Composer.json Update Required');
        $this->info('=================================');
        $this->info('To use this package, we need to add it to your project\'s composer.json file.');
        $this->newLine();
        $this->info('The following changes will be made:');
        $this->info("  • Add package: {$packageName}");
        $this->info("  • Add repository path: packages/{$this->config['package_name']}");
        $this->newLine();

        if (!$this->confirm('Would you like to update composer.json automatically?', true)) {
            $this->warn('⚠️  Composer.json not updated automatically.');
            $this->newLine();
            $this->info('💡 Manual Setup Instructions:');
            $this->info('=============================');
            $this->info('Add the following to your composer.json file:');
            $this->newLine();

            $this->info('1. In the "require" section:');
            $this->line('   "' . $packageName . '": "@dev"');
            $this->newLine();

            $this->info('2. In the "repositories" section (create if it doesn\'t exist):');
            $this->line('   {');
            $this->line('       "type": "path",');
            $this->line('       "url": "packages/' . $this->config['package_name'] . '",');
            $this->line('       "options": {');
            $this->line('           "symlink": true');
            $this->line('       }');
            $this->line('   }');
            $this->newLine();

            $this->info('3. Then run: composer update');
            return;
        }

        try {
            $composerJson = json_decode(file_get_contents($composerPath), true);

            if (!$composerJson) {
                throw new \Exception('Failed to parse composer.json file');
            }

            // Add the new package to require
            $composerJson['require'][$packageName] = '@dev';

            // Add repository path
            $repositoryPath = [
                'type' => 'path',
                'url' => 'packages/' . $this->config['package_name'],
                'options' => ['symlink' => true]
            ];

            // Initialize repositories array if it doesn't exist
            if (!isset($composerJson['repositories'])) {
                $composerJson['repositories'] = [];
            }

            // Check if repository already exists
            $exists = false;
            foreach ($composerJson['repositories'] as $repo) {
                if (isset($repo['url']) && $repo['url'] === $repositoryPath['url']) {
                    $exists = true;
                    break;
                }
            }

            if (!$exists) {
                $composerJson['repositories'][] = $repositoryPath;
            }

            // Create backup of original composer.json
            $backupPath = $composerPath . '.backup.' . date('Y-m-d-H-i-s');
            copy($composerPath, $backupPath);

            // Save updated composer.json
            $jsonContent = json_encode($composerJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
            if (!file_put_contents($composerPath, $jsonContent)) {
                throw new \Exception('Failed to write updated composer.json');
            }

            $this->info('✅ Composer.json updated successfully!');
            $this->info("📄 Backup created: {$backupPath}");

        } catch (\Exception $e) {
            $this->error('❌ Failed to update composer.json: ' . $e->getMessage());
            $this->warn('You will need to update composer.json manually.');
            $this->newLine();
            $this->info('Manual instructions shown above.');
        }
    }

    /**
     * Run composer update with progress indication
     */
    private function runComposerUpdate(): void
    {
        if ($this->option('no-interaction')) {
            return; // Skip composer update in non-interactive mode
        }

        $this->newLine();
        $this->info('🔄 Composer Update');
        $this->info('==================');
        $this->info('To complete the installation, we need to run "composer update"');
        $this->info('to install the new package and its dependencies.');
        $this->newLine();
        $this->warn('⚠️  This may take a few minutes and will update other packages if needed.');
        $this->newLine();

        if (!$this->confirm('Would you like to run "composer update" now?', true)) {
            $this->info('⏭️  Skipping composer update.');
            $this->newLine();
            $this->info('💡 Don\'t forget to run the following commands manually:');
            $this->info('   1. composer update');
            $this->info('   2. npm install && npm run dev');
            $this->info("   3. php artisan install:{$this->config['package_name']}");
            return;
        }

        $this->info('🔄 Running composer update...');
        $this->newLine();

        try {
            // Show a simple progress indicator
            $this->info('This may take a while. Please wait...');

            // Use a simpler approach that works across Laravel versions
            $result = Process::run(['composer', 'update', '--no-scripts']);

            if ($result->failed()) {
                throw new \Exception('Composer update failed with exit code: ' . $result->exitCode());
            }

            $this->info('✅ Composer packages updated successfully!');

        } catch (\Exception $e) {
            // Log the error but don't fail the entire process
            $this->error('❌ Composer update failed: ' . $e->getMessage());
            $this->newLine();
            $this->warn('You will need to run "composer update" manually.');
            $this->info('💡 Run these commands after package creation:');
            $this->info('   1. composer update');
            $this->info('   2. npm install && npm run dev');
            $this->info("   3. php artisan install:{$this->config['package_name']}");
        }
    }

    /**
     * Load stub file and save with replacements
     */
    private function loadStubFileAndSave(
        string $stubFile,
        string $saveFilePath,
        string $fileName,
        string $fileExtension = '.php',
        ?array $replace = null
    ): void {
        $this->makePath($saveFilePath);

        $stubPath = __DIR__ . '/Stubs/ExtensionPackage/' . $stubFile . '.stub';

        if (!file_exists($stubPath)) {
            throw new \Exception("Stub file not found: {$stubPath}");
        }

        $stub = file_get_contents($stubPath);

        if (!empty($replace)) {
            $stub = str_replace($replace['variables'], $replace['values'], $stub);
        }

        $filePath = $saveFilePath . '/' . $fileName . $fileExtension;

        if (!file_put_contents($filePath, $stub)) {
            throw new \Exception("Failed to create file: {$filePath}");
        }
    }

    /**
     * Create directory path if it doesn't exist
     */
    private function makePath(string $path): void
    {
        if (!File::isDirectory($path)) {
            if (!File::makeDirectory($path, 0755, true)) {
                throw new \Exception("Failed to create directory: {$path}");
            }
        }
    }

    /**
     * Display success message and next steps
     */
    private function displaySuccess(): void
    {
        $this->info('✅ Package created successfully!');
        $this->newLine();

        $this->info('📦 Package Details:');
        $this->info("   Name: {$this->config['package_name']}");
        $this->info("   Location: packages/{$this->config['package_name']}");
        $this->info("   Composer: {$this->config['composer_prefix']}/{$this->config['package_name']}");
        $this->newLine();

        $this->info('🚀 Next Steps:');
        $this->info('   1. Run: npm install && npm run dev');
        $this->info("   2. Run: php artisan install:{$this->config['package_name']}");
        $this->info("   3. Run: php artisan republish:{$this->config['package_name']}");
        $this->newLine();

        $this->info('📝 Available Routes:');
        $this->info("   Frontend: /{$this->config['package_name']}/frontend");
        $this->info("   Backend: /admin/backend");
        $this->newLine();

        $this->info('Happy coding! 🎉');
    }
}
