<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

class Money
{
    /**
     * Function to convert decimal price (pounds) to pence
     * @param  float $price Price to 2 decimal places
     * @return integer      Price in pence
     */
    public static function makePence($price) : int
    {
        return round($price * 100);
    }

    /**
     * Function to make Pounds from pence price
     * @param  integer $price Value in Pence
     * @return float          Return the value in Pounds to 2 decimal place in nice format
     */
    public static function makePounds($price) : float
    {
        $value = round($price / 100, 2);
        return number_format($value, 2, '.', '');
    }
}
