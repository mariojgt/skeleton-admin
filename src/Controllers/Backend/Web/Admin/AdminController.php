<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Builder\Enums\FieldTypes;
use Illuminate\Support\Facades\Session;
use Mariojgt\SkeletonAdmin\Models\Role;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class AdminController extends Controller
{
    public function index()
    {
        // Build the breadcrumb
        $breadcrumb = [
            [
                'label' => 'Admins',
                'url'   => route('admin.admin.index'),
            ]
        ];

        // Table columns
        $columns = [
            [
                'label'     => 'Id',
                'key'       => 'id',
                'sortable'  => true,
                'canCreate' => false,
                'canEdit'   => false,
            ],
            [
                'label'     => 'First Name',
                'key'       => 'first_name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => FieldTypes::TEXT->value,
            ],
            [
                'label'     => 'Last Name',
                'key'       => 'last_name',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => FieldTypes::TEXT->value,
            ],
            [
                'label'     => 'Email',
                'key'       => 'email',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => false,
                'type'      => FieldTypes::EMAIL->value,
            ],
            [
                'label'     => 'Password',
                'key'       => 'password',
                'sortable'  => true,
                'canCreate' => true,
                'canEdit'   => true,
                'type'      => FieldTypes::PASSWORD->value,
            ],
        ];

        return Inertia::render('BackEnd/Admin/Index', [
            'title'      => 'Admin | Admin',
            'breadcrumb' => $breadcrumb,
            // Required for the generic builder table api
            'endpoint'       => route('admin.api.generic.table'),
            'endpointDelete' => route('admin.api.generic.table.delete'),
            'endpointCreate' => route('admin.api.generic.table.create'),
            'endpointEdit'   => route('admin.api.generic.table.update'),
            // You table columns
            'columns'        => $columns,
            // The model where all those actions will take place
            'model'          => encrypt(Admin::class),
            // If you want to protect your crud form you can use this below not required
            // The permission name for the crud
            'permission'     => encrypt([
                'guard'         => 'skeleton_admin',
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
        ]);
    }

    /**
     * Edit the admin.
     */
    public function edit($admin = null)
    {
        // Get current user else the login admin
        if (empty($admin)) {
            $adminInfo = backendGuard()->user();
        } else {
            $adminInfo = backendGuard();
        }

        // Start the user authenticator so we can enable or disable the 2FA and other options
        $authenticator = new AuthenticatorHandle();
        // Authenticator information
        $authenticatorInfo = [];

        // First we check if the user is uisng the authenticator
        if (backendGuard()->user()->twoStepsEnable()) {
            $authenticatorInfo = [
                'is_enable'    => backendGuard()->user()->twoStepsEnable(),
                'backup_codes' => json_decode(backendGuard()->user()->getCodes->codes),
            ];
        } else {
            $authenticatorInfo = [
                'codeinfo'     => $authenticator->generateCode(backendGuard()->user()->email),
                'is_enable'    => backendGuard()->user()->twoStepsEnable(),
            ];
        }

        // Get system available roles
        $roles = Role::where('guard_name', 'skeleton_admin')->pluck('name', 'id');

        return Inertia::render('BackEnd/Admin/Edit', [
            'autenticator' => $authenticatorInfo,
            'admin'              => new AdminResource($adminInfo),
            'roles'              => $roles,
        ]);
    }

    /**
     * Update admin profile.
     */
    public function update(Request $request, Admin $admin)
    {
        // Validate the email to make sure it is unique
        $this->validate($request, [
            'first_name' => 'required',
            'last_name'  => 'required',
            'email'      => 'required|email|unique:admins,email,'.$admin->id,
        ]);

        $admin->first_name = Request('first_name');
        $admin->last_name  = Request('last_name');
        $admin->email      = Request('email');
        $admin->save();

        // Update the roles
        // First remove all the roles from the admin
        $admin->roles()->detach();
        // Remove all the user permissions
        $admin->permissions()->detach();
        // FInd the role in the database
        $role = Role::find(Request('role'));
        $admin->assignRole($role);

        return Redirect::back()
            ->with('success', 'Profile updated successfully');
    }

    /**
     * Handle the password update.
     */
    public function updatePassword(Request $request, Admin $admin)
    {
        // Validate the email to make sure it is unique
        // Validate the user Note the small update in the password verification
        $request->validate([
            'password'  => ['required', 'confirmed'],
        ]);

        // Check if the two factor is enable
        if (backendGuard()->user()->twoStepsEnable()) {
            // Validate the code to make sure it has 6 digits
            $request->validate([
                'code' => 'required|digits:6',
            ]);

            $authenticatorHandle = new AuthenticatorHandle();
            $verification = $authenticatorHandle->checkCode(Request('code'));
            // If the code is not valid we redirect the user to the edit page
            if ($verification == false) {
                return Redirect::back()
                    ->with('error', 'Code Is Not Valid.');
            }
        }

        $admin->password = bcrypt(Request('password'));
        $admin->save();

        return Redirect::back()
            ->with('success', 'Password updated successfully');
    }

    /**
     * Check if the code that the user type match with the authenticator.
     */
    public function enable2fa(Request $request)
    {
        // Validate the code to make sure it has 6 digits
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        $authenticatorHandle = new AuthenticatorHandle();
        $verification        = $authenticatorHandle->checkCode(Request('code'));

        // if true we can sync the user
        if ($verification) {
            backendGuard()->user()->syncAuthenticator(Session::get('authenticator_key'));
            // Return success
            return Redirect::back()
                ->with('success', 'code sync with success.');
        } else {
            // Return success
            return Redirect::back()
                ->with('error', 'Sorry Code invalid try again.');
        }
    }

    /**
     * Function Remove the 2FA.
     */
    public function removeAuthenticator(Request $request)
    {
        // Validate the code to make sure it has 6 digits
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        // Call the authenticator handle to remove the authenticator
        $AuthenticatorHandle = new AuthenticatorHandle();
        $verification = $AuthenticatorHandle->checkCode(Request('code'));
        // If the code is not valid we redirect the user to the edit page
        if ($verification == false) {
            return Redirect::back()
                ->with('error', 'Code Is Not Valid.');
        }

        // Start the user authenticator so we can enable or disable the 2FA and other options
        backendGuard()->user()->getCodes->delete();

        return Redirect::back()
            ->with('success', 'Authenticator Removed');
    }
}
