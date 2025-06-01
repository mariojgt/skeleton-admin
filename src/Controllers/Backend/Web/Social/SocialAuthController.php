<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\Social;

use Illuminate\Support\Facades\DB;
use App\Helpers\UserCreationManager;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Models\User;
use Laravel\Socialite\Facades\Socialite;
use GuzzleHttp\Exception\ClientException;
use Mariojgt\SkeletonAdmin\Models\SocialAccount;

class SocialAuthController extends Controller
{
    public function redirect($provider)
    {
        activity()
            ->log('User redirected to social login');
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
                if (empty($user)) {
                    activity()
                        ->log('User created with social account');
                    // Create new user
                    $user = User::create([
                        'first_name'        => $socialUser->getName(),
                        'username'          => $socialUser->getNickname() ?? strtolower(str_replace(' ', '_', $socialUser->getName())),
                        'email'             => $socialUser->getEmail(),
                        'avatar'            => $socialUser->getAvatar(),
                        'registration_type' => $provider,
                        'email_verified_at' => now(),
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

            activity()
                ->causedBy($user)
                ->log('User logged in with social account');
            return redirect()->route('home');
        } catch (ClientException $e) {
            // Handle specific Guzzle client exceptions
            DB::rollBack();

            $errorDetails = json_decode($e->getResponse()->getBody()->getContents(), true);

            return redirect()->route('login')->withErrors([
                'error' => 'Social login failed: ' . ($errorDetails['error_description'] ?? 'An unknown error occurred.'),
            ]);
        } catch (\Exception $e) {
            // Handle general exceptions
            DB::rollBack();

            return redirect()->route('login')
                ->with('error', 'Unable to login with ' . ucfirst($provider) . '. Please try again.');
        }
    }
}
