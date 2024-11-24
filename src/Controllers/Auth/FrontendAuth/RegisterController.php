<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Models\User;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class RegisterController extends Controller
{
    public function register()
    {
        return Inertia::render('Auth/Frontend/Register', [
            'title' => 'Login',
        ]);
    }

    public function userRegister(Request $request)
    {
        if (config('skeleton.frontend_register_enable') == false) {
            return Redirect::back()->with('error', 'Sorry but registration has been disable.');
        }

        $validation = $request->validate([
            'username' => ['required', 'string', 'max:255'],
            'first_name' => ['string', 'max:255'],
            'last_name' => ['string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', Password::min(8)->uncompromised()],
        ]);

        DB::beginTransaction();
        // Register the user in the database
        $user = User::create($validation);

        // Send the notification to the user
        $user->notify(
            new GenericNotification(
                'Welcome',
                'info',
                'Account created successfully.',
                'icon'
            )
        );

        // Send the verification to the user
        if (config('skeleton.frontend_email_verify')) {
            try {
                UserVerifyEvent::dispatch($user);
                DB::commit();

                return Redirect::back()
                    ->with('success', 'Account Created with success, Please check you email for a verification link.');
            } catch (\Throwable $th) {
                // If there is a error we rollback the transaction
                DB::rollback();

                return Redirect::back()
                    ->with('error', 'The email service is not setup correctly, please contact the administrator.');
            }
        } else {
            // Verify the user
            $user->email_verified_at = now();
            $user->save();
            DB::commit();

            auth()->login($user);

            return Redirect::route(config('skeleton.front_end_register_redirect'))
                ->with('success', 'Account Created with success, Welcome to the Dashboard.');
        }
    }
}
