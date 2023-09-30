<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Models\Permission;

class RoleController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Role',
                'url'   => route('admin.role.index'),
            ]
        ];

        // Table columns
        $columns = [
            [
                'label'     => 'Id',    // Display name
                'key'       => 'id',    // Table column key
                'sortable'  => true,    // Can be use in the filter
                'canCreate' => false,   // Can be use in the create form
                'canEdit'   => false,   // Can be use in the edit form
            ],
            [
                'label'     => 'Name',   // Display name
                'key'       => 'name',   // Table column key
                'sortable'  => true,     // Can be use in the filter
                'canCreate' => true,     // Can be use in the create form
                'canEdit'   => true,     // Can be use in the edit form
                'type'      => 'text',   // Type text,email,password,date,timestamp
            ],
            [
                'label'     => 'Guard',
                'key'       => 'guard_name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => 'text',
            ],
            [
                'label'     => 'Created At',
                'key'       => 'created_at',
                'sortable'  => false,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'date',
            ],
            [
                'label'     => 'Updated At',
                'key'       => 'updated_at',
                'sortable'  => false,
                'canCreate' => false,
                'canEdit'   => true,
                'type'      => 'timestamp',
            ],
        ];

        return Inertia::render('BackEnd/Role/Index', [
            'title'      => 'Role | Roles',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(Role::class),
            // If you want to protect your crud form you can use this below not required
            'permission'     => encrypt([
                'guard'          => 'skeleton_admin',
                // You can use permission or role up to you
                'type'          => 'permission',
                // The permission name or role
                'key' => [
                    'store'  => 'create-permission',
                    'update' => 'edit-permission',
                    'delete' => 'delete-permission',
                    'index'  => 'read-permission',
                ],
            ]),
            'custom_edit_route' => '/' . config('skeleton.route_prefix') . '/role/edit/',
        ]);
    }

    public function edit(Request $request, Role $role) {

        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Role',
                'url'   => route('admin.role.index'),
            ]
        ];

        // System avaliable permissions and group by guard
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

    public function update(Request $request, Role $role) {

        $validData = $request->validate([
          'name'       => 'required',
          'guard_name' => 'required',
        ]);

        $role->name       = $validData['name'];
        $role->guard_name = $validData['guard_name'];
        $role->save();

        return back()->with('success', 'Role updated successfully');
    }

    public function syncPerm(Request $request, Role $role) {

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
