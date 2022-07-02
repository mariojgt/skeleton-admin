<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use NumberFormatter;

class Money
{
    /**
     * Function to convert decimal price (pounds) to pence
     * @param  float $price Price to 2 decimal places
     * @return integer      Price in pence
     */
    public static function makePennies($price): int
    {
        return round($price * 100);
    }

    /**
     * Make pennies into float
     * @param  integer $price Value in Pence
     * @return float Return the value in Pounds to 2 decimal place in nice format
     */
    public static function makePenniesToFloat($price): float
    {
        $value = round($price / 100, 2);
        return number_format($value, 2, '.', '');
    }
}
