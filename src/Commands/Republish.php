<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use File;
use Illuminate\Console\Command;

class Republish extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'republish:skeleton-admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will copy the resource files from back to the package';

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
        $bar = $this->output->createProgressBar(6);
        $bar->start();

        // Delete extra files from other packages if they exist
        File::deleteDirectory(__DIR__ . '/../../Publish/Resource');

        // First we move the resources where we keep the css and js files
        $this->moveFileOrFolder(
            resource_path('vendor/SkeletonAdmin/'),
            __DIR__ . '/../../Publish/Resource/',
            $bar
        );
        File::deleteDirectory(__DIR__ . '/../../Publish/Resource/js/backend/Pages/Vendor');
        File::deleteDirectory(__DIR__ . '/../../Publish/Resource/js/backend/Components/Vendor');
        File::deleteDirectory(__DIR__ . '/../../Publish/Resource/js/frontend/Pages/Vendor');
        File::deleteDirectory(__DIR__ . '/../../Publish/Resource/js/frontend/Components/Vendor');

        File::deleteDirectory(__DIR__ . '/../../Publish/Public');
        // Now we move the already compiles files from the public
        $this->moveFileOrFolder(
            public_path('vendor/Skeleton'),
            __DIR__ . '/../../Publish/Public/',
            $bar
        );

        // Copy the avatar folder
        $this->moveFileOrFolder(
            public_path('assets/avatars'),
            __DIR__ . '/../../Publish/Avatars',
            $bar
        );

        // Now we copy the tailwind file
        $this->moveFileOrFolder(
            base_path('vite.config.js'),
            __DIR__ . '/../../Publish/Npm/vite.config.js',
            $bar,
            true
        );

        // Now we copy the package.json file
        $this->moveFileOrFolder(
            base_path('package.json'),
            __DIR__ . '/../../Publish/Npm/package.json',
            $bar,
            true
        );

        // Now we copy the postcss.config.js file
        $this->moveFileOrFolder(
            base_path('postcss.config.js'),
            __DIR__ . '/../../Publish/Npm/postcss.config.js',
            $bar,
            true
        );

        // Now we copy the postcss.config.js file
        $this->moveFileOrFolder(
            base_path('jsconfig.json'),
            __DIR__ . '/../../Publish/Npm/jsconfig.json',
            $bar,
            true
        );

        $bar->finish(); // Finish the progress bar
        $this->newLine();
        $this->info('The command was successful!');
    }

    /**
     * @param mixed $target // The folder we want to copy
     * @param mixed $destination // The folder we want to copy to
     * @param mixed $bar // The progress bar or the command
     *
     * @return void
     */
    private function moveFileOrFolder($target, $destination, $bar, $isFile = false): void
    {
        if ($isFile) {
            File::copy($target, $destination);
        } else {
            File::copyDirectory($target, $destination);
        }
        $bar->advance(); // Little Progress bar
    }
}
