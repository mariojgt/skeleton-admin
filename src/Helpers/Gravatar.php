<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

class Gravatar
{
    /**
     * Function to turn email to gravatar code.
     */
    private static function createGravatar($email)
    {
        return md5(strtolower(trim($email)));
    }

    /**
     * Function to create a url for gravatar.
     */
    public static function gravatarUrl($code, $size = 50)
    {
        return '//www.gravatar.com/avatar/' . $code . '?s=350&d=mp';
    }

    /**
     * Function to display a gravatar.
     */
    public static function displayGravatar($email, $size = 35, $class = '')
    {
        if (empty($email)) {
            return false;
        } else {
            $code = self::createGravatar($email);
            $url = self::gravatarUrl($code, $size);
            echo '<img src="' . $url . '" class="img-avatar img-fluid" />';
        }
    }

    /**
     * Function to return a gravatar url.
     */
    public static function gravatar($email, $size = 35)
    {
        if (empty($email)) {
            return false;
        } else {
            $code = self::createGravatar($email);
            $url = self::gravatarUrl($code, $size);

            return $url;
        }
    }
}
