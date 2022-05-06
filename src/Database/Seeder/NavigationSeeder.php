<?php

namespace Mariojgt\SkeletonAdmin\Database\Seeder;

use Illuminate\Database\Seeder;
use Mariojgt\SkeletonAdmin\Models\Navigation;

class NavigationSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Create the menu for the backend
        $menuOptions = [
            // Home Just for testing
            [
                'parent_id'  => null,
                'menu_label' => 'home',
                'route'      => 'skeleton-admin.home',
                'icon'       => 'home',
                'guard'      => 'skeleton_admin',
            ],
            // Roles
            [
                'parent_id'  => null,
                'menu_label' => 'roles',
                'route'      => 'admin.role.index',
                'icon'       => 'role',
                'guard'      => 'skeleton_admin',
            ],
            // Permission
            [
                'parent_id'  => null,
                'menu_label' => 'permission',
                'route'      => 'admin.permission.index',
                'icon'       => 'permission',
                'guard'      => 'skeleton_admin',
            ],
            // Navigations
            [
                'parent_id'  => null,
                'menu_label' => 'navigation',
                'route'      => 'admin.navigation.index',
                'icon'       => 'navigation',
                'guard'      => 'skeleton_admin',
            ],
        ];

        // Loop the menuOptions and create it
        foreach ($menuOptions as $role) {
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
