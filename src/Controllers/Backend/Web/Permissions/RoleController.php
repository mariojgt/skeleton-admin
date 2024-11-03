<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\SkeletonAdmin\Models\Permission;

class RoleController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Role',
                'url'   => route('admin.role.index'),
            ]
        ];

        // Initialize form helper
        $form = new FormHelper();
        $formConfig = $form
            // Add your fields
            ->addIdField()
            ->addField(
                label: 'Name',
                key: 'name',
                type: FieldTypes::TEXT->value
            )
            ->addSelectWithOptions(
                label: 'Guard',
                key: 'guard_name',
                options: [
                    'skeleton_admin' => 'backend',
                    'web'           => 'frontend',
                    'api'           => 'api',
                ]
            )
            ->addField(
                label: 'Created At',
                key: 'created_at',
                sortable: false,
                canCreate: false,
                canEdit: true,
                type: FieldTypes::DATE->value
            )
            ->addTimestampField(
                label: 'Updated At',
                key: 'updated_at',
                canEdit: true
            )
            // Set endpoints
            ->setEndpoints(
                listEndpoint: route('admin.api.generic.table'),
                deleteEndpoint: route('admin.api.generic.table.delete'),
                createEndpoint: route('admin.api.generic.table.create'),
                editEndpoint: route('admin.api.generic.table.update')
            )
            // Set model
            ->setModel(Role::class)
            // Set permissions
            ->setPermissions(
                guard: 'skeleton_admin',
                type: 'permission',
                permissions: [
                    'store'  => 'create-permission',
                    'update' => 'edit-permission',
                    'delete' => 'delete-permission',
                    'index'  => 'read-permission',
                ]
            )
            // Set custom edit route
            ->setCustomEditRoute('/' . config('skeleton.route_prefix') . '/role/edit/')
            // Build final configuration
            ->build();

        return Inertia::render('BackEnd/Role/Index', [
            'title'      => 'Role | Roles',
            'breadcrumb' => $breadcrumb,
            ...$formConfig
        ]);
    }

    public function edit(Request $request, Role $role)
    {
        $breadcrumb = [
            [
                'label' => 'Role',
                'url'   => route('admin.role.index'),
            ]
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
            'breadcrumb'      => $breadcrumb,
            'role'            => $role,
            'permissions'     => $permissions,
            'rolePermissions' => $rolePermissions,
        ]);
    }

    public function update(Request $request, Role $role)
    {

        $validData = $request->validate([
          'name'       => 'required',
          'guard_name' => 'required',
        ]);

        $role->name       = $validData['name'];
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
