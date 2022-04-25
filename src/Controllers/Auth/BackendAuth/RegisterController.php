<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Illuminate\Validation\Rules\Password;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;
class RegisterController extends Controller
{
    /**
     * @return [blade view]
     */
    public function register()
    {
        return Inertia::render('Auth/Backend/Register', [
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
        if (config('skeleton.backend_register_enable') == false) {
            return Redirect::back()->with('error', 'Sorry but registration has been disable.');
        }

        // Validate the user Note the small update in the password verification
        $request->validate([
            'fist_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email'     => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password'  => ['required', 'confirmed', Password::min(8)->uncompromised()],
        ]);

        DB::beginTransaction();

        // Register The user
        $user             = new Admin();
        $user->first_name = Request('fist_name');
        $user->last_name  = Request('last_name');
        $user->email      = Request('email');
        $user->password   = Hash::make(Request('password'));
        $user->save();

        // If not send the email of user verification
        $user->email_verified_at = Carbon::now();
        $user->save();

        // Assin the Administrator role
        $user->assignRole('Administrator');

        // Send the notification to the user
        $user->notify(new GenericNotification(
            'Welcome',
            'info',
            'Account created successfully.',
            'icon'
        ));

        DB::commit();

        return Redirect::back()
            ->with('success', 'Account Created with success.');
    }
}
