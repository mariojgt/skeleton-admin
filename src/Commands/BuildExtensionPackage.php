<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Process;

/**
 * This command will create a extension package so you can create lets say a new blog package using skeleton admin as a base, so no need to manually create the package.
 */
class BuildExtensionPackage extends Command
{
    /**
     * {user} user|admin {type} icon|image
     *
     * @var string
     */
    protected $signature = 'skeleton:extension-package';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will create a extension package so you can create lets say a new blog package using skeleton admin frontend and backend as a base, no need to manually create the package.';

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
        // What is the project namespace
        $namespace = $this->getNamespace();
        // Ask the package name name
        $packageName = $this->ask(
            'What is the package name?, example <fg=blue>master-store</>, <fg=red>master-store</>',
            'skeleton-blog'
        );
        // This is the package name is pascal case
        $providerName = Str::studly($packageName) . 'ServiceProvider';
        // Ask the composer prefix so we can append to the composer.json
        $composerPrefix = $this->ask(
            'What is the composer prefix?, example <fg=blue>master-store</>, <fg=yellow>master-store</>',
            'skeleton'
        );
        // Ask the package description
        $description = $this->ask(
            'What is the package description?, example <fg=green>This is a blog</>, <fg=yellow>This is a blog</>',
            'this is a blog'
        );
        // Ask the frontend and backend controller name
        $controller = $this->getController();

        /*
        |--------------------------------------------------------------------------
        | Create the basic files for the package
        |--------------------------------------------------------------------------
        */
        // Create the composer file
        $this->createComposer($composerPrefix, $packageName, $description, $namespace, $providerName);
        // Create the readme file
        $this->createReadme($packageName, $description);

        /*
        |--------------------------------------------------------------------------
        | Create the basic packages files
        |--------------------------------------------------------------------------
        */
        // Create the provider
        $this->createProvider($packageName, $namespace, $providerName);
        // Create the Backend controller
        $this->createController($packageName, $namespace, $controller, 'Backend');
        // Create the Frontend controller
        $this->createController($packageName, $namespace, $controller, 'Frontend');

        /*
        |--------------------------------------------------------------------------
        | Create the install and republish command
        |--------------------------------------------------------------------------
        */
        $this->createInstallCommand($namespace, $packageName, $providerName);
        // Create the republish command
        $this->createRepublishCommand($namespace, $packageName);

        /*
        |--------------------------------------------------------------------------
        | Now we run the system action first we append to the composer.json
        |--------------------------------------------------------------------------
        */
        // Append the composer.json
        $composerJson = json_decode(file_get_contents(base_path('composer.json')), true);
        // Add the new package to the composer
        $composerJson['require'][$composerPrefix . '/' . $packageName] = '@dev';
        // Now add the path to the repositories
        $composerJson['repositories'][] = [
            'type' => 'path',
            'url' => 'packages/' . $packageName,
            'options' => [
                'symlink' => true
            ]
        ];
        // Save the composer.json
        file_put_contents(base_path('composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT));
        // Now run the composer update
        $this->info('Running composer update');
        $this->runComposer();

        $this->newLine();
        $this->info('The package was created successfully, you can now run the following commands');
        $this->newLine();
        $this->info('npm install and npm run dev to compile the assets');
        $this->newLine();
        $this->info('php artisan republish:' . $packageName . ' this will copy the resource files from back to the package');
    }

    /**
     * Return the right controller name
     *
     * @return string
     */
    private function getController(): string
    {
        // Ask the frontend and backend controller name
        $controller = $this->ask(
            'What is the controller name?, example <fg=blue>Home</>, <fg=red>Bank</>',
            'Blog'
        );
        // Check if there is the controller name on the string if not add it
        if (!Str::contains($controller, 'Controller')) {
            $controller = $controller . 'Controller';
        }
        return $controller;
    }

    private function getNamespace(): string
    {
        // What is the project namespace
        $namespace = $this->ask(
            'What is the project namespace?, example <fg=blue> Skeleton\Blog\ </>',
            'Skeleton\Blog\\'
        );
        // For the name space we to replace the \ with \\
        $namespace = str_replace('/', '\\\\', str_replace('\\', '\\\\', $namespace));
        // Now make sure we append \\ at the end if not exist
        if (!Str::endsWith($namespace, '\\')) {
            $namespace = $namespace . '\\\\';
        }
        return $namespace;
    }

    private function createVuePage(
        string $packageName,
        string $namespace,
        string $controller,
        string $location,
        // Frontend or Backend
    ): void {
        $location = strtolower($location);
        $viewLayout = $location == 'backend' ? '@backend_layout/App.vue' : '@frontend_layout/App.vue';
        // Make sure that $namespace is valid
        $namespace = str_replace('\\\\', '\\', $namespace);
        $replace = [
            'variables' => [
                '{{namespace}}',
                '{{name}}',
                '{{location}}',
                '{{controller}}',
                '{{page_layout}}'
            ],
            'values' => [
                $namespace,
                $packageName,
                $location,
                $controller,
                $viewLayout
            ]
        ];
        $this->loadStubFileAndSave(
            'indexView',
            resource_path('vendor/SkeletonAdmin/js/' . $location . '/Pages/Vendor/' . $packageName),
            'index',
            '.vue',
            $replace
        );
    }

    /**
     * Run the composer update
     *
     * @return void
     */
    private function runComposer(): void
    {
        // Run the build command
        $process = Process::start('composer update');
        // and display the command output on while is running
        while ($process->running()) {
            // Now append the output to the file in a new line using 1 second delay
            $this->info($process->output());
        }
    }

    private function createRoute(
        string $packageName,
        string $namespace,
        string $controller,
        string $location,
        // Frontend or Backend,
        string $routeType = 'web' // web or api
    ): void {
        $routePrefix = $location == 'Backend' ? 'admin' : strtolower($packageName);
        // Make sure that $namespace is valid
        $namespace = str_replace('\\\\', '\\', $namespace);
        $replace = [
            'variables' => [
                '{{namespace}}',
                '{{name}}',
                '{{location}}',
                '{{controller}}',
                '{{route_prefix}}',
                '{{location_lower}}'
            ],
            'values' => [
                $namespace,
                $packageName,
                $location,
                $controller,
                $routePrefix,
                strtolower($location)
            ]
        ];
        $this->loadStubFileAndSave(
            $routeType . 'Route',
            base_path('packages/' . $packageName . '/src/Routes/' . $location . '/' . $routeType),
            $routeType,
            '.php',
            $replace
        );
    }

    /**
     * Create the republish command
     *
     * @param string $namespace
     * @param string $packageName
     *
     * @return void
     */
    private function createRepublishCommand(
        string $namespace,
        string $packageName,
    ): void {
        // Create the composer stub
        // Make sure that $namespace is valid
        $namespace = str_replace('\\\\', '\\', $namespace);
        $replace = [
            'variables' => [
                '{{namespace}}',
                '{{name}}'
            ],
            'values' => [
                $namespace,
                $packageName
            ]
        ];
        $this->loadStubFileAndSave(
            'republishCommand',
            base_path('packages/' . $packageName . '/src/Commands'),
            'Republish',
            '.php',
            $replace
        );
    }

    /**
     * Create the package laravel provider
     *
     * @param string $namespace // The package name
     * @param string $packageName // The package namespace
     * @param string $provider // The controller name
     *
     * @return void
     */
    private function createInstallCommand(
        string $namespace,
        string $packageName,
        string $provider
    ): void {
        // Create the composer stub
        // Make sure that $namespace is valid
        $namespace = str_replace('\\\\', '\\', $namespace);
        $replace = [
            'variables' => [
                '{{namespace}}',
                '{{name}}',
                '{{provider}}',
            ],
            'values' => [
                $namespace,
                $packageName,
                $provider,
            ]
        ];
        $this->loadStubFileAndSave(
            'InstallCommand',
            base_path('packages/' . $packageName . '/src/Commands'),
            'Install',
            '.php',
            $replace
        );
    }

    /**
     * Create the package laravel provider
     *
     * @param string $packageName // The package name
     * @param string $namespace // The package namespace
     * @param string $controller // The controller name
     * @param string $location // The location
     *
     * @return void
     */
    private function createController(
        string $packageName,
        string $namespace,
        string $controller,
        string $location // Frontend or Backend
    ): void {
        $controller = $location . $controller;

        $locationView = $location == 'Backend' ? 'BackEnd' : 'FrontEnd';

        // Create the composer stub
        // Make sure that $namespace is valid
        $namespace = str_replace('\\\\', '\\', $namespace);
        $replace = [
            'variables' => [
                '{{name}}',
                '{{namespace}}',
                '{{location}}',
                '{{controller}}',
                '{{location_view}}',
            ],
            'values' => [
                $packageName,
                $namespace,
                $location,
                $controller,
                $locationView
            ]
        ];
        $this->loadStubFileAndSave(
            'controller',
            base_path('packages/' . $packageName . '/src/Controllers/' . $location),
            $controller,
            '.php',
            $replace
        );
        // Create the view
        $this->createVuePage($packageName, $namespace, $controller, $location);

        // Create the web route and api route from both front and backend
        $this->createRoute($packageName, $namespace, $controller, $location, 'web');
        $this->createRoute($packageName, $namespace, $controller, $location, 'api');
    }

    /**
     * Create the package laravel provider
     *
     * @param string $packageName // The package name
     * @param string $namespace // The package namespace
     * @param string $providerName // The provider name
     *
     * @return void
     */
    private function createProvider(
        string $packageName,
        string $namespace,
        string $providerName,
    ): void {
        // Create the packaged migration folder
        $this->makePath(base_path('packages/' . $packageName . '/src/Database/Migrations'));
        // Create the Model folder
        $this->makePath(base_path('packages/' . $packageName . '/src/Models'));

        // Create the composer stub
        // Make sure that $namespace is valid and remove the last \
        $namespace = str_replace('\\\\', '\\', $namespace);
        $namespace = rtrim($namespace, '\\');

        $replace = [
            'variables' => [
                '{{namespace}}',
                '{{provider}}',
                '{{name}}',
            ],
            'values' => [
                $namespace,
                $providerName,
                $packageName,
            ]
        ];
        $this->loadStubFileAndSave(
            'provider',
            base_path('packages/' . $packageName . '/src'),
            $providerName,
            '.php',
            $replace
        );
    }

    /**
     * Create the composer file for the package
     *
     * @param string $packageName
     * @param string $description
     *
     * @return void
     */
    private function createReadme(
        string $packageName,
        string $description,
    ): void {
        $replace = [
            'variables' => [
                '{{name}}',
                '{{description}}',
            ],
            'values' => [
                $packageName,
                $description,
            ]
        ];
        // Create the composer stub
        $this->loadStubFileAndSave(
            'README',
            base_path('packages/' . $packageName),
            'README',
            '.md',
            $replace
        );
    }

    /**
     * Create the composer file for the package
     *
     * @param string $packageName
     * @param string $description
     * @param string $namespace
     * @param string $providerName
     *
     * @return void
     */
    private function createComposer(
        string $prefix,
        string $packageName,
        string $description,
        string $namespace,
        string $providerName
    ): void {
        $replace = [
            'variables' => [
                '{{name}}',
                '{{description}}',
                '{{namespace}}',
                '{{provider}}',
            ],
            'values' => [
                $prefix . '/' . $packageName,
                $description,
                $namespace,
                $providerName,
            ]
        ];
        // Create the composer stub
        $this->loadStubFileAndSave(
            'composer',
            base_path('packages/' . $packageName),
            'composer',
            '.json',
            $replace
        );
    }

    /**
     * @param string $stubFile // The stub file name
     * @param string $saveFilePath // The path where the file will be saved
     * @param string $fileName // The file name
     * @param string $fileExtension // The file extension
     * @param null $replace // The replace array
     *
     * @return void
     */
    private function loadStubFileAndSave(
        string $stubFile,
        string $saveFilePath,
        string $fileName,
        string $fileExtension = '.php',
        $replace = null
    ): void {
        $this->makePath($saveFilePath);
        // based on the current __DIR__ we go back 2 folders and check if the file exist
        $stub = file_get_contents(__DIR__ . '/Stubs/ExtensionPackage/' . $stubFile . '.stub');
        if (!empty($replace)) {
            $stub = str_replace($replace['variables'], $replace['values'], $stub);
        }

        file_put_contents($saveFilePath . '/' . $fileName . $fileExtension, $stub);
    }

    /**
     * Create any path if not exist
     *
     * @param string $path
     *
     * @return void
     */
    private function makePath(string $path): void
    {
        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0777, true, true);
        }
    }
}
