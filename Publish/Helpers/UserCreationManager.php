<?php

namespace App\Helpers;

use Mariojgt\SkeletonAdmin\Models\User;

/**
 * This helper will handle user creation events
 * Users can override these methods in their main Laravel app
 */
class UserCreationManager
{
    /**
     * This function will be called when a user is created
     * You can override this method in your main Laravel app
     *
     * @return void
     */
    public static function onUserCreated(User $user)
    {
        // Default plugin behavior - create user level if method exists
        if (method_exists($user, 'userLevel') && ! $user->userLevel) {
            $user->userLevel()->create([
                'level' => 1,
                'xp' => 0,
                'total_xp' => 0,
            ]);
        }
        // Log the user creation
        \Log::info('User created via SkeletonAdmin plugin', ['user_id' => $user->id]);
    }
}
