<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\FrontendAuth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Models\User;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Frontend/Index', [
            'title' => 'Login',
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $credentials = $request->only('email', 'password');

        // Try login Note the you have the guard
        if (Auth::guard(config('skeleton.user_guard'))->attempt($credentials)) {
            // Check if the user has been verify
            if (! Auth::user()->hasVerifiedEmail()) {
                Auth::logout();

                return back()->with('error', 'User need to be verify!');
            }

            return redirect()->back()->with('success', 'Welcome :)');
        } else {
            return Redirect::back()->with('error', 'Credentials do not match');
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        return Redirect::route(config('skeleton.front_end_logout_redirect'))->with('success', 'By :)');
    }

    public function verify(Request $request, $userId, $expiration)
    {
        $userId = decrypt($userId);
        $expiration = decrypt($expiration);
        $user = User::findOrFail($userId);
        $nowDate = Carbon::now();

        // Check if is expired
        if ($nowDate > $expiration) {
            return Redirect::route(config('skeleton.front_end_verify_redirect'))->with('error', 'Link Expired!');
        }

        // Check if the user has been verify
        if (! $user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
            event(new Verified($user));
            Auth::guard(config('skeleton.user_guard'))->login($user);
        }

        return Redirect::route(config('skeleton.front_end_verify_redirect'))->with('success', 'User verify with success!');
    }

    public function needVerify()
    {
        // In here we check if we want to send the user a need verification
        if (config('skeleton.send_verification')) {
            // Send the verification to the user
            UserVerifyEvent::dispatch(Auth::user());
        }

        // Logout the user and redirect him to the home page
        Auth::logout();

        return Redirect::route(config('skeleton.front_end_verify_redirect'))->with('error', 'User need to be verify!');
    }
}
