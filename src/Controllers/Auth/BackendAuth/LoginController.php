<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class LoginController extends Controller
{
    /**
     * Return the login view.
     *
     * @return [inertia]
     */
    public function index()
    {
        return Inertia::render('Auth/Backend/Index', [
            'title'   => 'Login',
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
        if (backendGuard()->attempt($credentials)) {
            return Redirect::route('skeleton-admin.home')->with('success', 'Welcome :)');
        } else {
            return Redirect::route('skeleton.login')->with('error', 'Credentials do not match');
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
        // Remove all the wall authenticator data from castle
        $authenticatorHandle = new AuthenticatorHandle();
        $verification = $authenticatorHandle->logout();

        // Logout the user
        backendGuard()->logout();
        // Redirect to the login page
        return Redirect::route('skeleton.login')->with('success', 'By :)');
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
            // Mark the user as verified
            $user->markEmailAsVerified();
            // Trigger the event to verify the user
            event(new Verified($user));
            // Send the notification to the user tell that the account has been verified
            $user->notify(new GenericNotification(
                'Account verified',
                'info',
                'Your account has been verified',
                'icon'
            ));
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
        backendGuard()->logout();

        // Return to the the login page as success
        return Redirect::route('login')->with('error', 'User need to be verify!');
    }
}
