<?php

namespace Mariojgt\SkeletonAdmin\Database\Seeder;

use Illuminate\Database\Seeder;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Models\Permission;
use Mariojgt\SkeletonAdmin\Enums\PermissionEnum;

class RolesPermissionSeeder extends Seeder
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
            // First or create the role
            Role::firstOrCreate([
                'name'       => $role['name'],
                'guard_name' => $role['guard_name'],
            ]);
        }
        // Create permissions
        $permissions = [
            [
                'name'       => PermissionEnum::CreatePermission->value,
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => PermissionEnum::EditPermission->value,
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => PermissionEnum::DeletePermission->value,
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => PermissionEnum::ReadPermission->value,
                'guard_name' => 'skeleton_admin',
            ],
            [
                'name'       => PermissionEnum::AdminEdit->value,
                'guard_name' => 'skeleton_admin',
            ]
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
