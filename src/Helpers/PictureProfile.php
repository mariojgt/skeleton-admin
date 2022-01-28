<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Mariojgt\UnityAdmin\Helpers\Gravatar;

class PictureProfile
{
    /**
     * This function will return a profile picture of the user or a admin
     * @param mixed $user
     * @param bool $admin
     *
     * @return [string]
     */
    public static function profilePicture($user, $admin = false)
    {
        if (empty($user->avatar)) {
            Gravatar::displayGravatar($user->email);
        } else {
            if ($admin) {
                $path = url('image/admin_avatar/' . $user->id . '/' . $user->avatar); // Setup the Path
            } else {
                $path = url('image/user_avatar/' . $user->id . '/' . $user->avatar); // Setup the Path
            }
            echo '<img src="' . $path . '" class="img-avatar img-fluid" />';
        }
    }

    /**
     * This function will return a profile picture of the user or a admin for apis
     *
     * @param mixed $user
     * @param bool $admin
     *
     * @return [string]
     */
    public static function profilePictureApi($user, $admin = false)
    {
        if (empty($user->avatar)) {
            return Gravatar::gravatar($user->email);
        } else {
            if ($admin) {
                $fileToCheck = public_path('image/admin_avatar/' . $user->id . '/' . $user->avatar);
                // Check if the file exist
                if (file_exists($fileToCheck)) {
                    $path = url('image/admin_avatar/' . $user->id . '/' . $user->avatar); // Setup the Path
                } else {
                    $path = Gravatar::gravatar($user->email);
                }
            } else {
                $fileToCheck = public_path('image/user_avatar/' . $user->id . '/' . $user->avatar);
                // Check if the file exist
                if (file_exists($fileToCheck)) {
                    $path = url('image/user_avatar/' . $user->id . '/' . $user->avatar); // Setup the Path
                } else {
                    $path = Gravatar::gravatar($user->email);
                }
            }
            return $path;
        }
    }
}
