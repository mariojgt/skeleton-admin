<?php

namespace Mariojgt\SkeletonAdmin\Database\Seeder;

use Illuminate\Database\Seeder;
use Mariojgt\SkeletonAdmin\Models\Navigation;

class BackendMenuSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Create the menu for the backend
        $roles = [
            [
                'parent_id'  => null,
                'menu_label' => 'home',
                'route'      => 'skeleton-admin.home',
                'icon'       => 'home',
                'guard'      => 'skeleton_admin',
            ]
        ];
        // Loop the roles and create it
        foreach ($roles as $role) {
            // Firt or create the role
            Navigation::firstOrCreate([
                'parent_id'  => $role['parent_id'],
                'menu_label' => $role['menu_label'],
                'route'      => $role['route'],
                'icon'       => $role['icon'],
                'guard'      => $role['guard'],
            ]);
        }
    }
}
