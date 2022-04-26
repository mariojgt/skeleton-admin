<?php

namespace Mariojgt\SkeletonAdmin\Database\Seeder;

use Illuminate\Database\Seeder;
use Mariojgt\SkeletonAdmin\Models\Permission;
use Mariojgt\SkeletonAdmin\Models\Role;

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
            // Firt or create the role
            $newRole = Role::firstOrCreate([
                'name'       => $role['name'],
                'guard_name' => $role['guard_name'],
            ]);
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
            ],
        ];
        // Loop the permissions and create them
        foreach ($permissions as $permission) {
            // Create or update the permission
            $newPermission = Permission::firstOrCreate([
                'name'       => $permission['name'],
                'guard_name' => $permission['guard_name'],
            ]);
            // Find the Administrator role and assign the permission
            $role = Role::where('name', 'Administrator')->first();
            $role->givePermissionTo($newPermission);
            $newPermission->assignRole($role);
        }
    }
}
