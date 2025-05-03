<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Auth\BackendAuth;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Skeleton\Store\Models\User;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Mail\MagicLoginLink;
use Mariojgt\Castle\Helpers\AuthenticatorHandle;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Notifications\GenericNotification;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Backend/Index', [
            'title'   => 'Login',
        ]);
    }

    public function login(Request $request)
    {
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

    public function logout(Request $request)
    {
        // Remove all the wall authenticator data from castle
        $authenticatorHandle = new AuthenticatorHandle();
        $authenticatorHandle->logout();

        backendGuard()->logout();

        return Redirect::route('skeleton.login')->with('success', 'By :)');
    }

    public function sendMagicLink(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:admins,email'],
        ]);

        $admin = Admin::where('email', $request->email)->firstOrFail();

        // Generate signed URL (valid for 15 minutes)
        $link = URL::temporarySignedRoute(
            'skeleton.magic.login',
            now()->addMinutes(15),
            ['admin' => $admin->id, 'hash' => sha1($admin->email)]
        );

        // You can send this via email
        Mail::to($admin->email)->send(new MagicLoginLink($link));

        return back()->with('success', 'We sent you a magic login link!');
    }

    public function handleMagicLink(Request $request, Admin $admin)
    {
        if (! $request->hasValidSignature() || sha1($admin->email) !== $request->hash) {
            abort(401, 'Invalid or expired login link.');
        }

        backendGuard()->login($admin);

        return Redirect::route('skeleton-admin.home')->with('success', 'Logged in successfully!');
    }


    public function verify(Request $request, $userId, $expiration)
    {
        $userId     = decrypt($userId);
        $expiration = decrypt($expiration);
        $user       = User::findOrFail($userId);
        $nowDate    = Carbon::now();

        if ($nowDate > $expiration) {
            return Redirect::route('login')->with('error', 'Link Expired!');
        }

        if (!$user->hasVerifiedEmail()) {

            $user->markEmailAsVerified();

            event(new Verified($user));

            $user->notify(new GenericNotification(
                'Account verified',
                'info',
                'Your account has been verified',
                'icon'
            ));
        }

        return Redirect::route('login')->with('success', 'User verify with success!');
    }

    public function needVerify()
    {
        // In here we check if we want to send the user a need verification
        if (config('skeleton.send_verification')) {
            // Send the verification to the user
            UserVerifyEvent::dispatch(Auth::user());
        }

        // Logout the user and redirect him to the home page
        backendGuard()->logout();

        return Redirect::route('login')->with('error', 'User need to be verify!');
    }
}
