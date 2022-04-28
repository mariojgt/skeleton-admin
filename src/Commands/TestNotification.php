<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Console\Command;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\User;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

/**
 * Test the notifications, automatic crea notifications and send them to the users for testing
 */
class TestNotification extends Command
{
    /**
     * {user} user|admin {type} icon|image
     *
     * @var string
     */
    protected $signature = 'test:notification {user} {type}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will send random notifications based if is a admin or a user';

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
        // Get the parametres
        $user = $this->argument('user');
        $type = $this->argument('type');

        // Swich case if is a user or a admin
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
