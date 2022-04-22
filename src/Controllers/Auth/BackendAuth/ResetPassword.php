<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Auth\Events\PasswordReset;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class ResetPassword extends Controller
{
    /**
     * @return [inersia]
     */
    public function index()
    {
        return Inertia::render('Auth/Backend/Reset', [
            'title' => 'Login',
        ]);
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return PasswordBroker
     */
    protected function broker()
    {
        return Password::broker('admins');
    }

    /**
     * Send a link so the user can reset the password.
     *
     * @param Request $request
     *
     * @return [redirect]
     */
    public function reset(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $response = $this->broker()->sendResetLink(
            $request->only('email')
        );

        return Redirect::back()->with('success', 'Password link sent with success.');
    }

    /**
     * @param mixed $token
     *
     * @return [blade view]
     */
    public function passwordReset($token)
    {
        return Inertia::render('Auth/Backend/ResetPassword', [
            'token' => $token,
            'isAdmin' => true,  // Dynamic update the logo
        ]);
    }

    /**
     * Change the user password.
     *
     * @param Request $request
     *
     * @return [Redirect]
     */
    public function passwordChange(Request $request)
    {
        $request->validate([
            'token'    => 'required',
            'email'    => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        // Reset the admin password based in the broker
        $response = $this->broker()->reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->save();
                // Send the notification to the user
                $user->notify(new GenericNotification(
                    'Password update',
                    'info',
                    'Your password has been updated.',
                    'icon'
                ));
                event(new PasswordReset($user));
            }
        );

        return Redirect::route('skeleton.login')->with('success', 'Password Update');
    }
}
