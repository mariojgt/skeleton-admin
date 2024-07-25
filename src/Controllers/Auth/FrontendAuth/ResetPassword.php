<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class ResetPassword extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Frontend/Reset', [
            'title' => 'Login',
        ]);
    }

    public function reset(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        Password::sendResetLink(
            $request->only('email')
        );

        return Redirect::back()->with('success', 'Password link sent with success.');
    }

    public function passwordReset(Request $request, $token)
    {
        return Inertia::render('Auth/Frontend/ResetPassword', [
            'token'   => $token,
            'isAdmin' => true,
            'email'   => $request->email,
        ]);
    }

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
