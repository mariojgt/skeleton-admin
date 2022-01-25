<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Mariojgt\SkeletonAdmin\Models\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;

class RegisterController extends Controller
{
    /**
     * @return [blade view]
     */
    public function register()
    {
        return Inertia::render('Login/Register', [
            'title' => 'Login',
        ]);
    }

    /**
     * Register a new user to the aplication.
     *
     * @param Request $request
     *
     * @return [redirect]
     */
    public function userRegister(Request $request)
    {
        // Chechk if the registration is enable
        if (config('skeletonAdmin.register_enable') == false) {
            return Redirect::back()->with('error', 'Sorry but registration has been disable.');
        }

        // Validate the user Note the small update in the password verification
        $request->validate([
            'fist_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email'     => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password'  => ['required', 'confirmed', Password::min(8)->uncompromised()],
        ]);

        // Register The user
        $user             = new Admin();
        $user->first_name = Request('fist_name');
        $user->last_name  = Request('last_name');
        $user->email      = Request('email');
        $user->password   = Hash::make(Request('password'));
        $user->save();

        // Check if the user need to be verify
        if (config('skeletonAdmin.send_verification') == true) {
            // Send the verification to the user
            UserVerifyEvent::dispatch($user);
        } else {
            // If not send the email of user verification
            $user->email_verified_at = true;
            $user->save();
        }

        return Redirect::back()
            ->with('success', 'Account Created with success, Please check you email for a verification link.');
    }
}
