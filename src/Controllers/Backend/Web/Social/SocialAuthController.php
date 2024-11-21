<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Social;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Mariojgt\SkeletonAdmin\Models\SocialAccount;

class SocialAuthController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->user();

            // Begin transaction
            DB::beginTransaction();

            // Check if we have a user with this social account
            $socialAccount = SocialAccount::where('provider', $provider)
                ->where('provider_id', $socialUser->getId())
                ->first();

            if ($socialAccount) {
                // Update the token
                $socialAccount->update([
                    'provider_token' => $socialUser->token,
                    'provider_refresh_token' => $socialUser->refreshToken,
                    'token_expires_at' => isset($socialUser->expiresIn) ? now()->addSeconds($socialUser->expiresIn) : null,
                ]);

                $user = $socialAccount->user;
            } else {
                // Check if user with this email exists
                $user = User::where('email', $socialUser->getEmail())->first();

                if (!$user) {
                    // Create new user
                    $user = User::create([
                        'name' => $socialUser->getName(),
                        'email' => $socialUser->getEmail(),
                        'avatar' => $socialUser->getAvatar(),
                        'registration_type' => $provider,
                        'email_verified_at' => now(), // Social login emails are considered verified
                    ]);
                }

                // Create social account
                $user->socialAccounts()->create([
                    'provider' => $provider,
                    'provider_id' => $socialUser->getId(),
                    'provider_token' => $socialUser->token,
                    'provider_refresh_token' => $socialUser->refreshToken,
                    'token_expires_at' => isset($socialUser->expiresIn) ? now()->addSeconds($socialUser->expiresIn) : null,
                ]);
            }

            DB::commit();

            // Login user
            Auth::login($user);

            return redirect()->route('home');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->route('login')
                ->with('error', 'Unable to login with ' . ucfirst($provider) . '. Please try again.');
        }
    }
}
