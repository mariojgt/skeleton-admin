<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;
use Mariojgt\SkeletonAdmin\Models\Permission;
use Mariojgt\SkeletonAdmin\Models\Role;

class RoleController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Role | Roles';
        $this->model = Role::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper)
            ->addIdField()
            ->addField(
                label: 'Name',
                key: 'name',
                sortable: true,
                canCreate: true,
                canEdit: true,
                unique: true, // Role names should be unique
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Guard',
                key: 'guard_name',
                type: FieldTypes::SELECT->value,
                options: [
                    'select_options' => [
                        ['value' => 'skeleton_admin', 'label' => 'backend'],
                        ['value' => 'web', 'label' => 'frontend'],
                        ['value' => 'api', 'label' => 'api'],
                    ],
                ],
                filterable: true
            )
            ->addTimestampField(
                label: 'Created At',
                key: 'created_at',
                sortable: true,
                canCreate: false,
                canEdit: false
            )
            ->addTimestampField(
                label: 'Updated At',
                key: 'updated_at',
                sortable: true,
                canCreate: false,
                canEdit: false
            )
            ->setCustomEditRoute('/'.config('skeleton.route_prefix').'/role/edit/');
    }

    public function edit(Request $request, Role $role)
    {
        $breadcrumb = [
            [
                'label' => 'Role',
                'url' => route('admin.role.index'),
            ],
        ];

        // System available permissions and group by guard
        $permissions = Permission::all()->groupBy('guard_name');
        $rolePermissions = [];
        foreach ($permissions as $key => $item) {
            foreach ($item as $keyData => $data) {
                $rolePermissions[$key][$data['name']] = empty($role->permissions->where('name', $data['name'])->first()) ? false : true;
            }
        }

        return Inertia::render('BackEnd/Role/Edit', [
            'breadcrumb' => $breadcrumb,
            'role' => $role,
            'permissions' => $permissions,
            'rolePermissions' => $rolePermissions,
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $validData = $request->validate([
            'name' => 'required',
            'guard_name' => 'required',
        ]);

        $role->name = $validData['name'];
        $role->guard_name = $validData['guard_name'];
        $role->save();

        return back()->with('success', 'Role updated successfully');
    }

    public function syncPerm(Request $request, Role $role)
    {
        $permissions = $request->permissions;
        $synPerms = [];
        foreach ($permissions as $key => $item) {
            foreach ($item as $itemKey => $data) {
                if ($data) {
                    $synPerms[] = $itemKey;
                }
            }
        }
        $perms = Permission::whereIn('name', $synPerms)->get()->pluck('id')->toArray();
        // Sync the permissions
        $role->syncPermissions($perms);

        return back()->with('success', 'Role updated successfully');
    }
}
