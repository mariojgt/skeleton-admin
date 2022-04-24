<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Models\Permission;


class PermissionSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Create roles
        $roles = [
            [
                'name'       => 'Administrator',
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => 'User',
                'guard_name' => 'web',
            ],
        ];
        // Loop the roles and create it
        foreach ($roles as $role) {
            $role             = new Role();
            $role->name       = $role['name'];
            $role->guard_name = $role['guard_name'];
            $role->save();
        }
        // Create permissions
        $permissions = [
            [
                'name'       => 'create-permission',
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => 'edit-permission',
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => 'delete-permission',
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => 'read-permission',
                'guard_name' => 'skeleton_admin',
            ]
        ];
        // Loop the permissions and create them
        foreach ($permissions as $permission) {
            $permission = new Permission();
            $permission->name = $permission['name'];
            $permission->guard_name = $permission['guard_name'];
            $permission->save();

            // Find the Administrator role and assign the permission
            $role = Role::where('name', 'Administrator')->first();
            $role->givePermissionTo($permission);
        }
    }
}
