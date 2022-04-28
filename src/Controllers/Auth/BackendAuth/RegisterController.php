<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Models\Admin;
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
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'email'      => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password'   => ['required', 'confirmed', Password::min(8)->uncompromised()],
        ]);

        DB::beginTransaction();

        // Register The user
        $user             = new Admin();
        $user->first_name = $request->first_name;
        $user->last_name  = $request->last_name;
        $user->email      = $request->email;
        $user->password   = Hash::make($request->password);
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
