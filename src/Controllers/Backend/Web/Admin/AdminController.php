<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Mariojgt\SkeletonAdmin\Models\Role;
use Mariojgt\SkeletonAdmin\Resource\Backend\AdminResource;

class AdminController extends Controller
{
    /**
     * Create new admin.
     *
     * @param Request $request
     */
    public function store(Request $request)
    {
        // code...
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
