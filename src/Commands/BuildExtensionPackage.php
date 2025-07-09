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
                            {--force : Force overwrite existing package}
                            {--no-composer-update : Skip composer update}';

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
    private ?ProgressBar $progressBar = null;

    /**
     * Whether running in interactive mode
     *
     * @var bool
     */
    private bool $isInteractive = true;

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
            // Check if running in non-interactive mode
            $this->isInteractive = !$this->option('no-interaction');

            if ($this->isInteractive) {
                $this->displayWelcome();
            }

            if (!$this->validateEnvironment()) {
                return 1;
            }

            $this->gatherConfiguration();

            if ($this->isInteractive && !$this->confirmConfiguration()) {
                $this->warn('Package creation cancelled.');
                return 0;
            }

            $this->createPackage();

            if ($this->isInteractive) {
                $this->displaySuccess();
            } else {
                $this->info("Package '{$this->config['package_name']}' created successfully in packages/{$this->config['package_name']}");
            }

            return 0;
        } catch (\Exception $e) {
            $this->error('An error occurred: ' . $e->getMessage());
            if ($this->option('verbose')) {
                $this->error('Stack trace: ' . $e->getTraceAsString());
            }
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
        // In non-interactive mode, all options must be provided
        if (!$this->isInteractive && !$this->validateRequiredOptions()) {
            throw new \Exception('In non-interactive mode, all required options must be provided: --name, --namespace, --prefix, --controller');
        }

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
     * Validate required options for non-interactive mode
     */
    private function validateRequiredOptions(): bool
    {
        $required = ['name', 'namespace', 'prefix', 'controller'];

        foreach ($required as $option) {
            if (!$this->option($option)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get package name with validation
     */
    private function getPackageName(): string
    {
        $name = $this->option('name');

        if (!$name && $this->isInteractive) {
            $name = $this->ask(
                'Package name (kebab-case, e.g., blog-system, user-management)',
                'skeleton-blog'
            );
        }

        if (!$name) {
            throw new \Exception('Package name is required');
        }

        // Validate package name
        if (!preg_match('/^[a-z][a-z0-9-]*[a-z0-9]$/', $name)) {
            throw new \Exception('Package name must be in kebab-case (lowercase, hyphens allowed)');
        }

        // Check if package already exists
        $packagePath = base_path('packages/' . $name);
        if (File::isDirectory($packagePath) && !$this->option('force')) {
            if ($this->isInteractive) {
                if (!$this->confirm("Package '{$name}' already exists. Overwrite?", false)) {
                    throw new \Exception('Package creation cancelled - package already exists');
                }
            } else {
                throw new \Exception("Package '{$name}' already exists. Use --force to overwrite.");
            }
        }

        return $name;
    }

    /**
     * Get namespace with validation
     */
    private function getNamespace(): string
    {
        $namespace = $this->option('namespace');

        if (!$namespace && $this->isInteractive) {
            $namespace = $this->ask(
                'Package namespace (e.g., Skeleton\\Blog\\, MyCompany\\Extensions\\)',
                'Skeleton\\Blog\\'
            );
        }

        if (!$namespace) {
            throw new \Exception('Namespace is required');
        }

        // Validate namespace
        if (!preg_match('/^[A-Z][A-Za-z0-9\\\\]+\\\\?$/', $namespace)) {
            throw new \Exception('Namespace must be in PascalCase with backslashes (e.g., Skeleton\\Blog\\)');
        }

        return $namespace;
    }

    /**
     * Get composer prefix with validation
     */
    private function getComposerPrefix(): string
    {
        $prefix = $this->option('prefix');

        if (!$prefix && $this->isInteractive) {
            $prefix = $this->ask(
                'Composer prefix (lowercase, e.g., skeleton, mycompany)',
                'skeleton'
            );
        }

        if (!$prefix) {
            throw new \Exception('Composer prefix is required');
        }

        // Validate composer prefix
        if (!preg_match('/^[a-z][a-z0-9-]*[a-z0-9]$/', $prefix)) {
            throw new \Exception('Composer prefix must be lowercase with optional hyphens');
        }

        return $prefix;
    }

    /**
     * Get package description
     */
    public function getDescription(): string
    {
        try {
            $description = $this->option('description');
            if (!$description && $this->isInteractive) {
                $description = $this->ask(
                    'Package description (optional)',
                    'A Laravel extension package for Skeleton Admin'
                );
            }

            return $description ?: 'A Laravel extension package for Skeleton Admin';
        } catch (\Throwable $th) {
            $description = 'A Laravel extension package for Skeleton Admin';
        }

        return 'A Laravel extension package for Skeleton Admin';
    }

    /**
     * Get controller name with validation
     */
    private function getController(): string
    {
        $controller = $this->option('controller');

        if (!$controller && $this->isInteractive) {
            $controller = $this->ask(
                'Main controller name (PascalCase, e.g., Blog, UserManagement)',
                'Blog'
            );
        }

        if (!$controller) {
            throw new \Exception('Controller name is required');
        }

        // Validate controller name
        if (!preg_match('/^[A-Z][A-Za-z0-9]*$/', $controller)) {
            throw new \Exception('Controller name must be in PascalCase');
        }

        // Don't automatically append 'Controller' - let the command handle it internally
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
            case 'php_with_trailing':
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
        ];

        // Only add composer update step if not skipped and in interactive mode
        if (!$this->option('no-composer-update') && $this->isInteractive) {
            $steps[] = 'Running composer update';
        }

        if ($this->isInteractive) {
            $this->progressBar = $this->output->createProgressBar(count($steps));
            $this->progressBar->setFormat(' %current%/%max% [%bar%] %percent:3s%% %message%');
        }

        foreach ($steps as $step) {
            if ($this->progressBar) {
                $this->progressBar->setMessage($step);
            }

            $this->executeStep($step);

            if ($this->progressBar) {
                $this->progressBar->advance();
                usleep(100000); // Small delay for visual effect
            }
        }

        if ($this->progressBar) {
            $this->progressBar->finish();
            $this->newLine(2);
        }
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
                $this->getNamespaceForContext('php') . $this->config['provider_name'],
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
        $namespace = rtrim($namespace, '\\');

        $replace = [
            'variables' => ['{{namespace}}', '{{provider}}', '{{name}}'],
            'values' => [
                $namespace,
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
            $controller = $location . $this->config['controller'] . 'Controller';

            $replace = [
                'variables' => ['{{name}}', '{{namespace}}', '{{location}}', '{{controller}}'],
                'values' => [
                    $this->config['package_name'],
                    $this->getNamespaceForContext('php'),
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
                $controller = $location . $this->config['controller'] . 'Controller';
                $routePrefix = $location === 'Backend' ? 'admin' : strtolower($this->config['package_name']);

                $replace = [
                    'variables' => [
                        '{{namespace}}', '{{name}}', '{{location}}',
                        '{{controller}}', '{{route_prefix}}', '{{location_lower}}'
                    ],
                    'values' => [
                        $this->getNamespaceForContext('php'),
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
            $controller = $location . $this->config['controller'] . 'Controller';
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
                $this->getNamespaceForContext('php'),
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
                $this->getNamespaceForContext('php'),
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

        if (!$this->isInteractive) {
            // In non-interactive mode, always try to update automatically
            $shouldUpdate = true;
        } else {
            $this->newLine();
            $this->info('📝 Composer.json Update Required');
            $this->info('=================================');
            $this->info('To use this package, we need to add it to your project\'s composer.json file.');
            $this->newLine();
            $this->info('The following changes will be made:');
            $this->info("  • Add package: {$packageName}");
            $this->info("  • Add repository path: packages/{$this->config['package_name']}");
            $this->newLine();

            $shouldUpdate = $this->confirm('Would you like to update composer.json automatically?', true);
        }

        if (!$shouldUpdate) {
            if ($this->isInteractive) {
                $this->warn('⚠️  Composer.json not updated automatically.');
                $this->showManualInstructions();
            }
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
            if ($this->isInteractive) {
                $this->info("📄 Backup created: {$backupPath}");
            }
        } catch (\Exception $e) {
            $this->error('❌ Failed to update composer.json: ' . $e->getMessage());
            if ($this->isInteractive) {
                $this->warn('You will need to update composer.json manually.');
                $this->showManualInstructions();
            }
        }
    }

    /**
     * Show manual composer.json instructions
     */
    private function showManualInstructions(): void
    {
        $packageName = $this->config['composer_prefix'] . '/' . $this->config['package_name'];

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
    }

    /**
     * Run composer update with progress indication
     */
    private function runComposerUpdate(): void
    {
        if (!$this->isInteractive) {
            // In non-interactive mode, skip composer update by default
            return;
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
            $this->showNextSteps();
            return;
        }

        $this->info('🔄 Running composer update...');
        $this->newLine();

        try {
            // Show a simple progress indicator
            $this->info('This may take a while. Please wait...');

            $result = Process::run(['composer', 'update', '--no-scripts']);

            if ($result->failed()) {
                throw new \Exception('Composer update failed with exit code: ' . $result->exitCode());
            }

            $this->info('✅ Composer packages updated successfully!');
        } catch (\Exception $e) {
            $this->error('❌ Composer update failed: ' . $e->getMessage());
            $this->warn('You will need to run "composer update" manually.');
            $this->showNextSteps();
        }
    }

    /**
     * Show next steps
     */
    private function showNextSteps(): void
    {
        $this->newLine();
        $this->info('💡 Don\'t forget to run the following commands manually:');
        $this->info('   1. composer update');
        $this->info('   2. npm install && npm run dev');
        $this->info("   3. php artisan install:{$this->config['package_name']}");
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
            // If stub file doesn't exist, create a basic template
            $this->createBasicStub($stubFile, $saveFilePath, $fileName, $fileExtension, $replace);
            return;
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
     * Create basic stub if stub file doesn't exist
     */
    private function createBasicStub(
        string $stubFile,
        string $saveFilePath,
        string $fileName,
        string $fileExtension,
        ?array $replace = null
    ): void {
        $content = '';

        switch ($stubFile) {
            case 'composer':
                $content = $this->getBasicComposerTemplate($replace);
                break;
            case 'README':
                $content = $this->getBasicReadmeTemplate($replace);
                break;
            case 'config':
                $content = $this->getBasicConfigTemplate($replace);
                break;
            case 'provider':
                $content = $this->getBasicProviderTemplate($replace);
                break;
            case 'controller':
                $content = $this->getBasicControllerTemplate($replace);
                break;
            case 'webRoute':
                $content = $this->getBasicWebRouteTemplate($replace);
                break;
            case 'apiRoute':
                $content = $this->getBasicApiRouteTemplate($replace);
                break;
            case 'indexView':
                $content = $this->getBasicIndexViewTemplate($replace);
                break;
            case 'vueComponentBackend':
            case 'vueComponentFrontend':
                $content = $this->getBasicVueComponentTemplate($replace);
                break;
            case 'InstallCommand':
                $content = $this->getBasicInstallCommandTemplate($replace);
                break;
            case 'republishCommand':
                $content = $this->getBasicRepublishCommandTemplate($replace);
                break;
            default:
                $content = "<?php\n\n// Basic template for {$stubFile}\n";
        }

        $filePath = $saveFilePath . '/' . $fileName . $fileExtension;
        if (!file_put_contents($filePath, $content)) {
            throw new \Exception("Failed to create file: {$filePath}");
        }
    }

    /**
     * Get basic composer.json template
     */
    private function getBasicComposerTemplate(?array $replace): string
    {
        $name = $replace['values'][0] ?? 'vendor/package';
        $description = $replace['values'][1] ?? 'Package description';
        $namespace = $replace['values'][2] ?? 'Vendor\\\\Package\\\\';
        $provider = $replace['values'][3] ?? 'Vendor\\Package\\ServiceProvider';

        return <<<JSON
{
    "name": "{$name}",
    "description": "{$description}",
    "type": "library",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "{$namespace}": "src/"
        }
    },
    "require": {
        "php": "^8.1",
        "laravel/framework": "^10.0|^11.0"
    },
    "extra": {
        "laravel": {
            "providers": [
                "{$provider}"
            ]
        }
    },
    "minimum-stability": "dev",
    "prefer-stable": true
}
JSON;
    }

    /**
     * Get basic README template
     */
    private function getBasicReadmeTemplate(?array $replace): string
    {
        $name = $replace['values'][0] ?? 'Package Name';
        $description = $replace['values'][1] ?? 'Package description';

        return <<<MD
# {$name}

{$description}

## Installation

1. Add the package to your composer.json
2. Run `composer update`
3. Run `php artisan install:{$name}`

## Usage

This package provides additional functionality for Skeleton Admin.

## License

MIT License
MD;
    }

    /**
     * Get basic config template
     */
    private function getBasicConfigTemplate(?array $replace): string
    {
        $name = $replace['values'][0] ?? 'package';
        $description = $replace['values'][1] ?? 'Package description';

        return <<<PHP
<?php

return [
    'name' => '{$name}',
    'description' => '{$description}',
    'version' => '1.0.0',
    'enabled' => true,
];
PHP;
    }

    /**
     * Get basic service provider template
     */
    private function getBasicProviderTemplate(?array $replace): string
    {
        $namespace = $replace['values'][0] ?? 'Vendor\\Package';
        $provider = $replace['values'][1] ?? 'ServiceProvider';
        $packageName = $replace['values'][2] ?? 'package';

        return <<<PHP
<?php

namespace {$namespace};

use Illuminate\Support\ServiceProvider;

class {$provider} extends ServiceProvider
{
    public function register()
    {
        \$this->mergeConfigFrom(
            __DIR__ . '/Config/{$packageName}.php',
            '{$packageName}'
        );
    }

    public function boot()
    {
        if (\$this->app->runningInConsole()) {
            \$this->publishes([
                __DIR__ . '/Config/{$packageName}.php' => config_path('{$packageName}.php'),
            ], 'config');

            \$this->commands([
                Commands\Install::class,
                Commands\Republish::class,
            ]);
        }

        \$this->loadRoutesFrom(__DIR__ . '/Routes/Backend/web/web.php');
        \$this->loadRoutesFrom(__DIR__ . '/Routes/Frontend/web/web.php');
    }
}
PHP;
    }

    /**
     * Get basic controller template
     */
    private function getBasicControllerTemplate(?array $replace): string
    {
        $packageName = $replace['values'][0] ?? 'package';
        $namespace = $replace['values'][1] ?? 'Vendor\\Package';
        $location = $replace['values'][2] ?? 'Backend';
        $controller = $replace['values'][3] ?? 'Controller';

        return <<<PHP
<?php

namespace {$namespace}Controllers\\{$location};

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class {$controller} extends Controller
{
    public function index()
    {
        return Inertia::render('{$location}/Pages/Vendor/{$packageName}/index');
    }

    public function create()
    {
        return Inertia::render('{$location}/Pages/Vendor/{$packageName}/create');
    }

    public function store(Request \$request)
    {
        // Implementation here
        return redirect()->back()->with('success', 'Created successfully');
    }

    public function show(\$id)
    {
        return Inertia::render('{$location}/Pages/Vendor/{$packageName}/show');
    }

    public function edit(\$id)
    {
        return Inertia::render('{$location}/Pages/Vendor/{$packageName}/edit');
    }

    public function update(Request \$request, \$id)
    {
        // Implementation here
        return redirect()->back()->with('success', 'Updated successfully');
    }

    public function destroy(\$id)
    {
        // Implementation here
        return redirect()->back()->with('success', 'Deleted successfully');
    }
}
PHP;
    }

    /**
     * Get basic web route template
     */
    private function getBasicWebRouteTemplate(?array $replace): string
    {
        $namespace = $replace['values'][0] ?? 'Vendor\\Package';
        $packageName = $replace['values'][1] ?? 'package';
        $location = $replace['values'][2] ?? 'Backend';
        $controller = $replace['values'][3] ?? 'Controller';
        $routePrefix = $replace['values'][4] ?? 'admin';

        return <<<PHP
<?php

use Illuminate\Support\Facades\Route;
use {$namespace}Controllers\\{$location}\\{$controller};

Route::group(['prefix' => '{$routePrefix}', 'middleware' => ['web']], function () {
    Route::resource('{$packageName}', {$controller}::class);
});
PHP;
    }

    /**
     * Get basic API route template
     */
    private function getBasicApiRouteTemplate(?array $replace): string
    {
        $namespace = $replace['values'][0] ?? 'Vendor\\Package';
        $packageName = $replace['values'][1] ?? 'package';
        $location = $replace['values'][2] ?? 'Backend';
        $controller = $replace['values'][3] ?? 'Controller';
        $routePrefix = $replace['values'][4] ?? 'api';

        return <<<PHP
<?php

use Illuminate\Support\Facades\Route;
use {$namespace}Controllers\\{$location}\\{$controller};

Route::group(['prefix' => '{$routePrefix}', 'middleware' => ['api']], function () {
    Route::apiResource('{$packageName}', {$controller}::class);
});
PHP;
    }

    /**
     * Get basic index view template
     */
    private function getBasicIndexViewTemplate(?array $replace): string
    {
        $packageName = $replace['values'][1] ?? 'package';
        $location = $replace['values'][2] ?? 'backend';
        $layout = $replace['values'][4] ?? '@backend_layout/App.vue';

        return <<<VUE
<template>
    <Layout>
        <div class="container mx-auto px-4 py-8">
            <div class="max-w-6xl mx-auto">
                <div class="flex justify-between items-center mb-8">
                    <div>
                        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                            {$packageName} Management
                        </h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">
                            Manage your {$packageName} items
                        </p>
                    </div>
                    <Link href="{{ route('{$packageName}.create') }}" class="btn btn-primary">
                        Create New
                    </Link>
                </div>

                <div class="card bg-base-100 shadow-lg">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Created</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="4" class="text-center py-8 text-gray-500">
                                            No items found
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import Layout from '{$layout}'

const props = defineProps({
    title: {
        type: String,
        default: '{$packageName} Management'
    }
})
</script>
VUE;
    }

    /**
     * Get basic Vue component template
     */
    private function getBasicVueComponentTemplate(?array $replace): string
    {
        $packageName = $replace['values'][1] ?? 'package';

        return <<<VUE
<template>
    <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
            <h2 class="card-title">{$packageName} Component</h2>
            <p>This is a basic component for the {$packageName} package.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Action</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '{$packageName} Component'
    }
})
</script>
VUE;
    }

    /**
     * Get basic install command template
     */
    private function getBasicInstallCommandTemplate(?array $replace): string
    {
        $namespace = $replace['values'][0] ?? 'Vendor\\Package';
        $packageName = $replace['values'][1] ?? 'package';

        return <<<PHP
<?php

namespace {$namespace}Commands;

use Illuminate\Console\Command;

class Install extends Command
{
    protected \$signature = 'install:{$packageName}';
    protected \$description = 'Install {$packageName} package';

    public function handle()
    {
        \$this->info('Installing {$packageName} package...');

        // Publish config
        \$this->call('vendor:publish', [
            '--provider' => '{$namespace}ServiceProvider',
            '--tag' => 'config'
        ]);

        \$this->info('{$packageName} package installed successfully!');

        return 0;
    }
}
PHP;
    }

    /**
     * Get basic republish command template
     */
    private function getBasicRepublishCommandTemplate(?array $replace): string
    {
        $namespace = $replace['values'][0] ?? 'Vendor\\Package';
        $packageName = $replace['values'][1] ?? 'package';

        return <<<PHP
<?php

namespace {$namespace}Commands;

use Illuminate\Console\Command;

class Republish extends Command
{
    protected \$signature = 'republish:{$packageName}';
    protected \$description = 'Republish {$packageName} package assets';

    public function handle()
    {
        \$this->info('Republishing {$packageName} package assets...');

        // Republish config
        \$this->call('vendor:publish', [
            '--provider' => '{$namespace}ServiceProvider',
            '--tag' => 'config',
            '--force' => true
        ]);

        \$this->info('{$packageName} package assets republished successfully!');

        return 0;
    }
}
PHP;
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
