<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Permissions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        // Selecte all roles with 10 per page
        $roles = Role::paginate(10);
        $displayRow = [
            'id'         => 'ID',
            'name'       => 'Name',
            'guard_name' => 'Guard',
        ];

        return Inertia::render('BackEnd/Permissions/Index', [
            'title' => 'Permissions | Roles',
            'data'  => $roles,
            'row'   => $displayRow,
        ]);
    }
}
