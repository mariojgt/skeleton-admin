<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Illuminate\Validation\ValidationException;
use Mariojgt\Castle\Helpers\AutenticatorHandle;
use Mariojgt\SkeletonAdmin\Resource\AdminResource;

class AdminController extends Controller
{
    /**
     * Create new admin
     * @param Request $request
     *
     * @return [type]
     */
    public function store(Request $request)
    {
        # code...
    }

    /**
     * Edit the admin
     *
     * @param null $admin
     *
     * @return [type]
     */
    public function edit($admin = null)
    {
        // Get current user else the login admin
        if (empty($admin)) {
            $adminInfo = Auth::guard('skeleton_admin')->user();
        } else {
            $adminInfo = Auth::guard('skeleton_admin');
        }

        // Start the user autenticator so we can enalbe or disable the 2FA and other options
        $autenticator = new AutenticatorHandle();
        // Autenticator information
        $autenticatorInfo = [];
        // First we check if the user is uisng the autenticator
        if (Auth::guard('skeleton_admin')->user()->twoStepsEnable()) {
            $autenticatorInfo = [
                'is_enable'    => Auth::guard('skeleton_admin')->user()->twoStepsEnable(),
                'backup_codes' => json_decode(Auth::guard('skeleton_admin')->user()->getCodes->codes),
            ];
        } else {
            $autenticatorInfo = [
                'codeinfo'     => $autenticator->generateCode(Auth::guard('skeleton_admin')->user()->email),
                'is_enable'    => Auth::guard('skeleton_admin')->user()->twoStepsEnable(),
            ];
        }

        return Inertia::render('BackEnd/Admin/Edit', [
            'autenticator' => $autenticatorInfo,
            'admin'        => new AdminResource($adminInfo),
        ]);
    }

    /**
     * Update admin profile
     *
     * @param Request $request
     *
     * @return [type]
     */
    public function update(Request $request, Admin $admin)
    {
        // Validate the email to make sure it is unique
        $this->validate($request, [
            'first_name' => 'required',
            'last_name'  => 'required',
            'email'      => 'required|email|unique:admins,email,' . $admin->id,
        ]);

        $admin->first_name = Request('first_name');
        $admin->last_name = Request('last_name');
        $admin->email = Request('email');
        $admin->save();

        return Redirect::back()
            ->with('success', 'Profile updated successfully');
    }

    /**
     * Handle the password update
     * @param Request $request
     * @param Admin $admin
     *
     * @return [type]
     */
    public function updatePassword(Request $request, Admin $admin)
    {
        // Validate the email to make sure it is unique
        // Validate the user Note the small update in the password verification
        $request->validate([
            'password'  => ['required', 'confirmed'],
        ]);

        // Check if the two factor is enable
        if (Auth::guard('skeleton_admin')->user()->twoStepsEnable()) {
            // Validate the code to make sure it has 6 digits
            $request->validate([
                'code' => 'required|digits:6',
            ]);

            $autenticatorHandle = new AutenticatorHandle();
            $verification       = $autenticatorHandle->checkCode(Request('code'));
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
     * Check if the code that the user type match with the autenticator
     * @param Request $request
     *
     * @return [type]
     */
    public function enable2fa(Request $request)
    {
        // Validate the code to make sure it has 6 digits
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        $autenticatorHandle = new AutenticatorHandle();
        $verification       = $autenticatorHandle->checkCode(Request('code'));

        // if true we can sync the user
        if ($verification) {
            Auth::guard('skeleton_admin')->user()->syncAutenticator(decrypt(Session::get('autenticator_key')));
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
     * Function Remove the 2FA
     * @param Request $request
     *
     * @return [type]
     */
    public function removeAutenticator(Request $request)
    {
        // Validate the code to make sure it has 6 digits
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        // Call the autenticator handle to remove the autenticator
        $autenticatorHandle = new AutenticatorHandle();
        $verification       = $autenticatorHandle->checkCode(Request('code'));
        // If the code is not valid we redirect the user to the edit page
        if ($verification == false) {
            return Redirect::back()
                ->with('error', 'Code Is Not Valid.');
        }

        // Start the user autenticator so we can enalbe or disable the 2FA and other options
        Auth::guard('skeleton_admin')->user()->getCodes->delete();

        return Redirect::back()
            ->with('success', 'Autenticator Removed');
    }
}
