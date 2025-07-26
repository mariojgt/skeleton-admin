<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class ResetPassword extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Backend/Reset', [
            'title' => 'Login',
        ]);
    }

    protected function broker()
    {
        return Password::broker('admins');
    }

    public function reset(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $this->broker()->sendResetLink(
            $request->only('email')
        );

        return Redirect::back()->with('success', 'Password link sent with success.');
    }

    public function passwordReset($token)
    {
        return Inertia::render('Auth/Backend/ResetPassword', [
            'token' => $token,
            'isAdmin' => true,  // Dynamic update the logo
        ]);
    }

    public function passwordChange(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        // Reset the admin password based in the broker
        $this->broker()->reset(
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
