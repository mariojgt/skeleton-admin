<?php

namespace Mariojgt\SkeletonAdmin\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

/**
 * Test the notifications, automatic crea notifications and send them to the users for testing
 */
class RebuildMenu extends Command
{
    /**
     * {user} user|admin {type} icon|image
     *
     * @var string
     */
    protected $signature = 'menu:backend';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Re run the seeder for the backend menu';

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

        // Run the naviation seeder
        Artisan::call('db:seed', [
            '--class' => 'Mariojgt\SkeletonAdmin\Database\Seeder\NavigationSeeder',
        ]);

        $this->newLine();
        $this->info('Menu was rebuilt successfully!');
    }
}
