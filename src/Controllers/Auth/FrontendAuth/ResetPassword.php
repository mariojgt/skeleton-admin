<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth;

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
     * @return [blade view]
     */
    public function index()
    {
        return Inertia::render('Auth/Frontend/Reset', [
            'title' => 'Login',
        ]);
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

        Password::sendResetLink(
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
        return Inertia::render('Auth/Frontend/ResetPassword', [
            'token'   => $token,
            'isAdmin' => true,     // Dynamic update the logo
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
        // Using laravel default password reset
        Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->save();

                $user->setRememberToken(Str::random(60));

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

        // Set a session message on the session
        session()->flash('success', 'Password updated with success.');

        return Redirect::route('login');
    }
}
