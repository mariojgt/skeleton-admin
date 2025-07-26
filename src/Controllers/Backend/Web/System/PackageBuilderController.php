<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Process;
use Inertia\Inertia;

class PackageBuilderController extends Controller
{
    /**
     * Display the package builder interface
     */
    public function index()
    {
        return Inertia::render('BackEnd/System/PackageBuilder', [
            'title' => 'Extension Package Builder',
            'breadcrumb' => [
                ['label' => 'System', 'url' => null],
                ['label' => 'Package Builder', 'url' => route('admin.package.builder')],
            ],
        ]);
    }

    /**
     * Generate extension package via API
     */
    public function generate(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|regex:/^[a-z][a-z0-9-]*[a-z0-9]$/',
            'namespace' => 'required|string|regex:/^[A-Z][A-Za-z0-9\\\\]+\\\\?$/',
            'prefix' => 'required|string|regex:/^[a-z][a-z0-9-]*[a-z0-9]$/',
            'description' => 'nullable|string|max:500',
            'controller' => 'required|string|regex:/^[A-Z][A-Za-z0-9]*$/',
            'force' => 'boolean',
            'features' => 'array',
            'features.backendRoutes' => 'boolean',
            'features.frontendRoutes' => 'boolean',
            'features.apiRoutes' => 'boolean',
            'features.database' => 'boolean',
            'features.commands' => 'boolean',
            'features.vueComponents' => 'boolean',
            'autoComposerUpdate' => 'boolean',
            'autoInstall' => 'boolean',
        ]);

        try {
            // Check if package already exists
            $packagePath = base_path('packages/'.$validated['name']);
            if (File::isDirectory($packagePath) && ! $validated['force']) {
                return response()->json([
                    'success' => false,
                    'message' => "Package '{$validated['name']}' already exists. Use force option to overwrite.",
                ], 422);
            }

            // Build the artisan command
            $command = 'skeleton:extension-package';
            $arguments = [
                '--name' => $validated['name'],
                '--namespace' => $validated['namespace'],
                '--prefix' => $validated['prefix'],
                '--controller' => $validated['controller'],
                '--no-interaction' => true, // Key for preventing prompts
            ];

            if (! empty($validated['description'])) {
                $arguments['--description'] = $validated['description'];
            }

            if ($validated['force']) {
                $arguments['--force'] = true;
            }

            // Execute the package generation command
            Artisan::call($command, $arguments);
            $output = Artisan::output();

            // Additional processing based on features
            $this->processPackageFeatures($validated['name'], $validated['features']);

            // Auto composer update if requested
            if ($validated['autoComposerUpdate']) {
                $this->runComposerUpdate();
            }

            // Auto install if requested
            if ($validated['autoInstall']) {
                $this->installPackage($validated['name']);
            }

            return response()->json([
                'success' => true,
                'message' => 'Package generated successfully!',
                'output' => $output,
                'package_path' => 'packages/'.$validated['name'],
                'next_steps' => $this->getNextSteps($validated['name']),
            ]);
        } catch (\Exception $e) {
            \Log::error('Package generation failed: '.$e->getMessage(), [
                'request_data' => $validated,
                'stack_trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Package generation failed: '.$e->getMessage(),
                'error_details' => app()->environment('local') ? $e->getTraceAsString() : null,
            ], 500);
        }
    }

    /**
     * Get existing packages
     */
    public function getExistingPackages()
    {
        try {
            $packagesPath = base_path('packages');
            $packages = [];

            if (File::isDirectory($packagesPath)) {
                $directories = File::directories($packagesPath);

                foreach ($directories as $dir) {
                    $packageName = basename($dir);
                    $composerFile = $dir.'/composer.json';

                    if (File::exists($composerFile)) {
                        $composer = json_decode(File::get($composerFile), true);

                        $packages[] = [
                            'name' => $packageName,
                            'composer_name' => $composer['name'] ?? 'unknown',
                            'description' => $composer['description'] ?? 'No description',
                            'path' => 'packages/'.$packageName,
                            'has_composer' => true,
                            'created_at' => date('Y-m-d H:i:s', filemtime($dir)),
                        ];
                    } else {
                        $packages[] = [
                            'name' => $packageName,
                            'composer_name' => 'unknown',
                            'description' => 'No composer.json found',
                            'path' => 'packages/'.$packageName,
                            'has_composer' => false,
                            'created_at' => date('Y-m-d H:i:s', filemtime($dir)),
                        ];
                    }
                }
            }

            return response()->json([
                'success' => true,
                'packages' => $packages,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load existing packages',
                'packages' => [],
            ], 500);
        }
    }

    /**
     * Validate package configuration
     */
    public function validateConfig(Request $request)
    {
        try {
            $errors = [];

            // Validate package name
            if (! preg_match('/^[a-z][a-z0-9-]*[a-z0-9]$/', $request->name)) {
                $errors['name'] = 'Package name must be in kebab-case';
            }

            // Check if package exists
            if (File::isDirectory(base_path('packages/'.$request->name))) {
                $errors['name'] = 'Package already exists';
            }

            // Validate namespace
            if (! preg_match('/^[A-Z][A-Za-z0-9\\\\]+\\\\?$/', $request->namespace)) {
                $errors['namespace'] = 'Invalid namespace format';
            }

            // Validate composer prefix
            if (! preg_match('/^[a-z][a-z0-9-]*[a-z0-9]$/', $request->prefix)) {
                $errors['prefix'] = 'Invalid composer prefix format';
            }

            // Validate controller
            if (! preg_match('/^[A-Z][A-Za-z0-9]*$/', $request->controller)) {
                $errors['controller'] = 'Controller name must be PascalCase';
            }

            return response()->json([
                'success' => count($errors) === 0,
                'errors' => $errors,
                'valid' => count($errors) === 0,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'errors' => ['general' => 'Validation failed'],
                'valid' => false,
            ], 500);
        }
    }

    /**
     * Process package features based on selection
     */
    private function processPackageFeatures(string $packageName, array $features)
    {
        $packagePath = base_path('packages/'.$packageName);

        // Remove unused directories based on features
        if (! $features['database']) {
            $this->removeDirectory($packagePath.'/src/Models');
            $this->removeDirectory($packagePath.'/src/Database');
        }

        if (! $features['commands']) {
            $this->removeDirectory($packagePath.'/src/Commands');
        }

        if (! $features['apiRoutes']) {
            $this->removeDirectory($packagePath.'/src/Routes/Backend/api');
            $this->removeDirectory($packagePath.'/src/Routes/Frontend/api');
        }

        if (! $features['backendRoutes']) {
            $this->removeDirectory($packagePath.'/src/Routes/Backend');
            $this->removeDirectory($packagePath.'/src/Controllers/Backend');
        }

        if (! $features['frontendRoutes']) {
            $this->removeDirectory($packagePath.'/src/Routes/Frontend');
            $this->removeDirectory($packagePath.'/src/Controllers/Frontend');
        }

        if (! $features['vueComponents']) {
            $this->removeDirectory($packagePath.'/src/Resources');
        }
    }

    /**
     * Remove directory if it exists
     */
    private function removeDirectory(string $path)
    {
        if (File::isDirectory($path)) {
            File::deleteDirectory($path);
        }
    }

    /**
     * Run composer update
     */
    private function runComposerUpdate()
    {
        try {
            $result = Process::run(['composer', 'update', '--no-scripts', '--quiet']);

            if ($result->failed()) {
                \Log::warning('Composer update failed during package generation', [
                    'exit_code' => $result->exitCode(),
                    'output' => $result->output(),
                ]);
            }
        } catch (\Exception $e) {
            \Log::warning('Failed to run composer update: '.$e->getMessage());
        }
    }

    /**
     * Install the package
     */
    private function installPackage(string $packageName)
    {
        try {
            Artisan::call("install:{$packageName}");
        } catch (\Exception $e) {
            \Log::warning("Failed to auto-install package {$packageName}: ".$e->getMessage());
        }
    }

    /**
     * Get next steps for the user
     */
    private function getNextSteps(string $packageName): array
    {
        return [
            'Run: npm install && npm run dev',
            "Run: php artisan install:{$packageName}",
            "Run: php artisan republish:{$packageName}",
            'Visit your package routes to test functionality',
        ];
    }
}
