<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Auth;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Illuminate\Support\Facades\Validator;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class AuthApiController extends Controller
{
    public function login(Request $request)
    {
         // Validate the user
         $validator = Validator::make($request->all(), [
            'email'       => ['required', 'string', 'email', 'max:255'],
            'password'    => ['required', 'string', 'min:8'],
            'device_name' => ['required', 'string'],
         ]);

        // If Validation Fail
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Credentials for the login
        $credentials = $request->only('email', 'password');

        // Try login
        if (Auth::guard('skeleton_admin')->attempt($credentials)) {
            // Return the sanctum token that will be used in the api
            $token = Auth::guard('skeleton_admin')->user()->createToken(Request('device_name'))->plainTextToken;
            // Return the token
            return response()->json([
                'raw_token' => $token,
                'token'     => explode('|', $token)[1],
            ]);
        } else {
            return response()->json([
                'data' => 'User not found',
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        // Logout the user
        Auth::user()->tokens()->delete();
        // Return the response
        return response()->json([
            'data' => 'Logout successful',
        ]);
    }

    public function register(Request $request)
    {
        // Check if the registration is enable
        if (config('skeleton.backend_register_enable') == false) {
            return response()->json([
                'data' => 'Sorry but registration has been disable.',
            ], 401);
        }

         // Validate the user
         $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'email'      => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password'   => ['required', 'confirmed', 'min:8'],
         ]);

        // If Validation Fail
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        DB::beginTransaction();

        // Register The user
        $user                    = new Admin();
        $user->first_name        = $request->first_name;
        $user->last_name         = $request->last_name;
        $user->email             = $request->email;
        $user->password          = Hash::make($request->password);
        $user->email_verified_at = Carbon::now();
        $user->save();

        // Assign the Administrator role
        $user->assignRole('Administrator');

        // Send the notification to the user
        $user->notify(new GenericNotification(
            'Welcome',
            'info',
            'Account created successfully.',
            'icon'
        ));

        DB::commit();

        return response()->json([
            'message' => 'Account Created with success.',
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
        // Validate the user
        $validator = Validator::make($request->all(), [
            'email'      => ['required', 'string', 'email', 'max:255'],
        ]);

        // If Validation Fail
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $this->broker()->sendResetLink(
            $request->only('email')
        );

        return response()->json([
            'message' => 'Password link sent with success.',
        ]);
    }
}
