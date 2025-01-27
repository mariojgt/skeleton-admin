<?php

namespace Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Web\Profile;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Mariojgt\SkeletonAdmin\Models\User;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Resource\Frontend\UserResource;

class ProfileController extends Controller
{

    /**
     * Edit the admin.
     */
    public function edit($user = null)
    {
        // Get current user else the login admin
        if (empty($user)) {
            $user = Auth::user();
        } else {
            $user = User::find($user);
        }

        $authenticator = new AuthenticatorHandle();
        $authenticatorInfo = [];
        // First we check if the user is using the authenticator
        if (Auth::user()->twoStepsEnable()) {
            $authenticatorInfo = [
                'is_enable'    => Auth::user()->twoStepsEnable(),
                'backup_codes' => json_decode(Auth::user()->getCodes->codes),
            ];
        } else {
            $authenticatorInfo = [
                'codeinfo'     => $authenticator->generateCode(Auth::user()->email),
                'is_enable'    => Auth::user()->twoStepsEnable(),
            ];
        }

        // Extra links
        $links = config('skeleton.extra_profile_links');

        return Inertia::render('FrontEnd/User/Edit', [
            'autenticator' => $authenticatorInfo,
            'user'         => new UserResource($user),
            'extraLinks'   => $links,
        ]);
    }

    /**
     * Update admin profile.
     */
    public function update(Request $request, User $user)
    {
        // Validate the username and email to ensure they are unique
        $data = $request->validate([
            'username'   => 'required|unique:users,username,' . $user->id,
            'first_name' => 'required',
            'last_name'  => 'required',
            'email'      => 'required|email|unique:users,email,' . $user->id,
        ]);

        // Update the user's profile with the validated data
        $user->username = $data['username'];
        $user->first_name = $data['first_name'];
        $user->last_name  = $data['last_name'];
        $user->email      = $data['email'];
        $user->save();

        return Redirect::back()
            ->with('success', 'Profile updated successfully');
    }


    /**
     * Handle the password update.
     */
    public function updatePassword(Request $request, User $user)
    {
        // Validate the email to make sure it is unique
        // Validate the user Note the small update in the password verification
        $request->validate([
            'password'  => ['required', 'confirmed'],
        ]);

        // Check if the two factor is enable
        if (Auth::user()->twoStepsEnable()) {
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
        // Update the password and hash it
        $user->password = bcrypt(Request('password'));
        $user->save();

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
        $verification = $authenticatorHandle->checkCode(Request('code'));
        // if true we can sync the user
        if ($verification) {
            Auth::user()->syncAuthenticator(Session::get('authenticator_key'));
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
    public function removeAutenticator(Request $request)
    {
        // Validate the code to make sure it has 6 digits
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        // Call the authenticator handle to remove the authenticator
        $authenticatorHandle = new AuthenticatorHandle();
        $verification = $authenticatorHandle->checkCode(Request('code'));

        // If the code is not valid we redirect the user to the edit page
        if ($verification == false) {
            return Redirect::back()
                ->with('error', 'Code Is Not Valid.');
        }

        // Start the user authenticator so we can enable or disable the 2FA and other options
        Auth::user()->getCodes->delete();

        return Redirect::back()
            ->with('success', 'Autenticator Removed');
    }
}
