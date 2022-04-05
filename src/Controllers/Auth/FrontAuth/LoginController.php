<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\FrontAuth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Models\User;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;

class LoginController extends Controller
{
    /**
     * @return [blade view]
     */
    public function index()
    {
        return Inertia::render('Auth/FrontLogin/Index', [
            'title'   => 'Login',
            'isAdmin' => false, // Dynamic update the logo
        ]);
    }

    /**
     * Try login the user.
     *
     * @param Request $request
     *
     * @return [blade view]
     */
    public function login(Request $request)
    {
        // Validate the user
        $request->validate([
            'email'    => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $credentials = $request->only('email', 'password');

        // Try login Note the you have the guard
        if (Auth::guard(config('skeleton.user_guard'))->attempt($credentials)) {
            return Redirect::route('user.home')->with('success', 'Welcome :)');
        } else {
            return Redirect::route('login')->with('error', 'Credentials do not match');
        }
    }

    /**
     * Logout the user and send to the login page.
     *
     * @param Request $request
     *
     * @return [redirect]
     */
    public function logout(Request $request)
    {
        Auth::logout();

        return Redirect::route('login')->with('success', 'By :)');
    }

    /**
     * Verify the user account based in the link.
     *
     * @param Request $request
     * @param mixed   $userId
     * @param mixed   $expiration
     *
     * @return [Redirect]
     */
    public function verify(Request $request, $userId, $expiration)
    {
        $userId     = decrypt($userId);
        $expiration = decrypt($expiration);
        $user       = User::findOrFail($userId);
        $nowDate    = Carbon::now();

        // Check if is expired
        if ($nowDate > $expiration) {
            return Redirect::route('login')->with('error', 'Link Expired!');
        }

        // Check if the user has been verify
        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
            event(new Verified($user));
        }

        // Return to the the login page as success
        return Redirect::route('login')->with('success', 'User verify with success!');
    }

    /**
     * Double check if the user needs verification before go the the next request.
     *
     * @return [Redirect]
     */
    public function needVerify()
    {
        // In here we check if we want to send the user a need verification
        if (config('skeleton.send_verification')) {
            // Send the verification to the user
            UserVerifyEvent::dispatch(Auth::user());
        }

        // Logout the user and redirect him to the home page
        Auth::logout();

        // Return to the the login page as success
        return Redirect::route('login')->with('error', 'User need to be verify!');
    }
}
