<?php

namespace Mariojgt\SkeletonAdmin\Database\Seeder;

use Illuminate\Database\Seeder;
use Mariojgt\SkeletonAdmin\Models\Navbar;

class NavbarSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $menuOptions = [
            [
                'menu_label' => 'My Profile',
                'route'      => 'admin.edit',
                'icon'       => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                            </path>
                </svg>',
                'guard'       => 'skeleton_admin',
                'is_frontend' => 0
            ],
            [
                'menu_label' => 'Logout',
                'route'      => 'skeleton.logout',
                'icon'       => '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>',
                'guard'       => 'skeleton_admin',
                'is_frontend' => 0
            ],
        ];

        // Loop the menuOptions and create it
        foreach ($menuOptions as $role) {
            // First or create the role
            Navbar::firstOrCreate([
                'menu_label'  => $role['menu_label'],
                'route'       => $role['route'],
                'icon'        => $role['icon'],
                'is_frontend' => $role['is_frontend'],
            ]);
        }
    }
}
