<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Console\Command;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\User;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

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
        // Ask the package name name
        $name = $this->ask('What is the package name?, example <fg=blue>master-store</>, <fg=red>master-store</>');
        dd($name);
        // Get the parameters
        $user = $this->argument('user');
        $type = $this->argument('type');

        // Switch case if is a user or a admin
        switch ($user) {
            case 'admin':
                // Get all users
                $admins = Admin::all();
                // Loop the users and send a notification
                foreach ($admins as $key => $admin) {
                    // Use factory to create names
                    $faker = \Faker\Factory::create();
                    // Get a random name
                    $name = $faker->name;
                    if ($type == 'icon') {
                        // Get a random icon
                        $icon = $faker->randomElement(['success', 'error', 'info', 'warning']);
                    } else {
                        $icon = 'https://i.pravatar.cc/300';
                    }
                    // Get a random message
                    $message = $faker->sentence;
                    // Send a notification
                    $admin->notify(new GenericNotification($name, $icon, $message, $type));
                }
                break;
            case 'user':
                // Get all users
                $users = User::all();
                // Loop the users and send a notification
                foreach ($users as $key => $user) {
                    // Use factory to create names
                    $faker = \Faker\Factory::create();
                    // Get a random name
                    $name = $faker->name;
                    if ($type == 'icon') {
                        // Get a random icon
                        $icon = $faker->randomElement(['success', 'error', 'info', 'warning']);
                    } else {
                        $icon = 'https://i.pravatar.cc/300';
                    }
                    // Get a random message
                    $message = $faker->sentence;
                    // Send a notification
                    $user->notify(new GenericNotification($name, $icon, $message, $type));
                }

                $this->info('Sending a notification to user');
                break;
            default:
                $this->error('The user is not valid');
                break;
        }

        $this->newLine();
        $this->info('The command was successful!');
    }
}
