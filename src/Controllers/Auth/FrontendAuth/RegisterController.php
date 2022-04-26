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
    /**
     * @return [blade view]
     */
    public function register()
    {
        return Inertia::render('Auth/Frontend/Register', [
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
        if (config('skeleton.frontend_register_enable') == false) {
            return Redirect::back()->with('error', 'Sorry but registration has been disable.');
        }
        // Validate the user Note the small update in the password verification
        $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::min(8)->uncompromised()],
        ]);

        DB::beginTransaction();
        // Register the user in the database
        $user = new User();
        $user->name = Request('name');
        $user->email = Request('email');
        $user->password = Hash::make(Request('password'));
        $user->save();

        // Send the notification to the user
        $user->notify(new GenericNotification(
            'Welcome',
            'info',
            'Account created successfully.',
            'icon'
        ));

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

            // Login the user using the guard
            auth()->login($user);
            // Redirect to the dashboard
            return Redirect::route('user.home')
                ->with('success', 'Account Created with success, Welcome to the Dashboard.');
        }
    }
}
