<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

class Gravatar
{

    /**
     * Function to turn email to gravatar code
     *
     * @param str $email - $email address to convert
     * @return str - Gravatar code
     */
    private static function createGravatar($email)
    {
        return md5(strtolower(trim($email)));
    }

    /**
     * Function to create a url for gravatar
     *
     * @param str $code - Gravatar code
     * @param int $size - Size of Gravatar to grab
     * @return url - Url to get gravatar from
     */
    public static function gravatarUrl($code, $size = 50)
    {
        return "//www.gravatar.com/avatar/" . $code . "?s=350&d=mp";
    }

    /**
     * Function to display a gravatar
     *
     * @param str $email - Email Address
     * @param int $size - Size of gravatar
     * @return html - display the gravatar
     */
    public static function displayGravatar($email, $size = 35, $class = '')
    {
        if (empty($email)) {
            return false;
        } else {
            $code = self::createGravatar($email);
            $url  = self::gravatarUrl($code, $size);
            echo '<img src="' . $url . '" class="img-avatar img-fluid" />';
        }
    }

    /**
     * @param string $email
     * @param int $size
     *
     * @return [type]
     */
    public static function gravatar($email, $size = 35)
    {
        if (empty($email)) {
            return false;
        } else {
            $code = self::createGravatar($email);
            $url  = self::gravatarUrl($code, $size);
            return $url;
        }
    }
}
