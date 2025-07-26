<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Mariojgt\Builder\Enums\FieldTypes;
use Mariojgt\Builder\Helpers\FormHelper;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Crud\GenericCrudController;
use Mariojgt\SkeletonAdmin\Enums\PermissionEnum;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class AdminController extends GenericCrudController
{
    public function __construct()
    {
        $this->title = 'Admin | Admin';
        $this->model = Admin::class;
    }

    protected function getFormConfig(): FormHelper
    {
        return (new FormHelper)
            ->addIdField()
            ->addField(
                label: 'First Name',
                key: 'first_name',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Last Name',
                key: 'last_name',
                sortable: true,
                canCreate: true,
                canEdit: true,
                type: FieldTypes::TEXT->value
            )
            ->addField(
                label: 'Password',
                key: 'password',
                sortable: false, // Passwords are not sortable
                canCreate: true,
                canEdit: true,
                type: FieldTypes::PASSWORD->value
            )
            ->addField(
                label: 'Email',
                key: 'email',
                sortable: true,
                canCreate: true,
                canEdit: true,
                unique: true,
                type: FieldTypes::EMAIL->value
            )
            ->setCustomEditRoute('/'.config('skeleton.route_prefix').'/admin/edit/');
    }

    /**
     * Edit the admin.
     */
    public function edit(?Admin $admin = null)
    {
        // Check if the login user has the permission to edit the admin
        if (! backendGuard()->user()->can(PermissionEnum::AdminEdit->value)) {
            return Redirect::back()
                ->with('error', 'You do not have permission to edit this admin');
        }

        if (empty($admin)) {
            $adminInfo = backendGuard()->user();
        } else {
            $adminInfo = $admin;
        }

        // Start the user authenticator so we can enable or disable the 2FA and other options
        $authenticator = new AuthenticatorHandle;
        // Authenticator information
        $authenticatorInfo = [];

        // First we check if the user is uisng the authenticator
        if ($adminInfo->twoStepsEnable()) {
            $authenticatorInfo = [
                'is_enable' => $adminInfo->twoStepsEnable(),
                'backup_codes' => json_decode($adminInfo->getCodes->codes),
            ];
        } else {
            $authenticatorInfo = [
                'codeinfo' => $authenticator->generateCode($adminInfo->email),
                'is_enable' => $adminInfo->twoStepsEnable(),
            ];
        }

        // Get system available roles
        $roles = Role::where('guard_name', 'skeleton_admin')->pluck('name', 'id');

        return Inertia::render('BackEnd/Admin/Edit', [
            'autenticator' => $authenticatorInfo,
            'admin' => new AdminResource($adminInfo),
            'roles' => $roles,
        ]);
    }

    /**
     * Update admin profile.
     */
    public function update(Request $request, Admin $admin)
    {
        // Validate the email to make sure it is unique
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:admins,email,'.$admin->id,
        ]);

        $admin->first_name = Request('first_name');
        $admin->last_name = Request('last_name');
        $admin->email = Request('email');
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
            'password' => ['required', 'confirmed'],
        ]);

        // Check if the two factor is enable
        if (backendGuard()->user()->twoStepsEnable()) {
            // Validate the code to make sure it has 6 digits
            $request->validate([
                'code' => 'required|digits:6',
            ]);

            $authenticatorHandle = new AuthenticatorHandle;
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

        $authenticatorHandle = new AuthenticatorHandle;
        $verification = $authenticatorHandle->checkCode(Request('code'));

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
        $AuthenticatorHandle = new AuthenticatorHandle;
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
