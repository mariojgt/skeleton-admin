<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

class Money
{
    /**
     * Function to return an array of pricing
     *
     * @param integer $value Price in pence
     * @param integer $tax_id Tax Rate Id
     * @return collection of pricing, local and default
     */
    public static function pricing($value, $tax_rate_id = 1)
    {
        // Ensure to get the price pre tax if prices include tax
        $taxRate = self::taxRate($tax_rate_id);
        $price['default'] = self::exTax($value, $taxRate);

        // Get the price for local currency
        $price['local'] = self::exTax($value * session('exchange_rate', 1.2), $taxRate);

        // return the value as a collection
        return collect($price);
    }

    /**
     * @param mixed $tax_rate_id
     *
     * @return [collection]
     */
    public static function taxRate($tax_rate_id)
    {
        return cache('taxes')->where('id', $tax_rate_id)->first();
    }

    /**
     * @param mixed $price
     * @param mixed $taxRate
     *
     * @return collection [collection]
     */
    public static function exTax($price, $taxRate)
    {
        $tax = $taxRate->value;

        // tax exempt by default
        $return = [
            'exc_tax'  => $price,
            'inc_tax'  => $price,
            'tax_rate' => 1,
            'tax'      => 0,
        ];

        // if logged in user and is tax exempt
        if (Auth::check() && Auth::user()->is_tax_exempt()) {
            $tax = 0;
        }

        // Add tax if not exempt
        $tax_rate = 1 + ($tax / 100);

        if ($tax != 0) {
            $return = [
                'exc_tax'  => $price,
                'inc_tax'  => $price * $tax_rate,
                'tax_rate' => $tax_rate,
                'tax'      => $tax,
            ];
        }

        // Remove tax if not exempt AND prices include tax
        if ($tax != 0 && config('settings.prices_include_tax') == 1) {
            $return = [
                'exc_tax'  => $price / $tax_rate,
                'inc_tax'  => $price,
                'tax_rate' => $tax_rate,
                'tax'      => $tax,
            ];
        }

        // Add additional data
        $return['tax']            = $return['inc_tax'] - $return['exc_tax'];
        $return['tax_name']       = $taxRate->name;
        $return['price_inc_tax']  = self::price($return['inc_tax']);
        $return['price_exc_tax']  = self::price($return['exc_tax']);
        $return['price_tax']      = self::price($return['tax']);
        $return['format_inc_tax'] = self::money($return['inc_tax']);
        $return['format_exc_tax'] = self::money($return['exc_tax']);
        $return['format_tax']     = self::money($return['tax']);

        // Return
        return collect($return);
    }

    /**
     * Function to return fully formatted money value
     *
     * @param  Decimal $value            Value of the amount
     * @param  string $thousandSeperator Seperator
     * @return string                    Formatted string with currency symbol
     */
    public static function money($value)
    {
        return session('exchange_symbol', '&pound;') . self::price($value, ',');
    }


    public static function retail($value, $tax = 1)
    {
        if ($tax == 1) {
            $value = $value * config('settings.tax_rate');
        }
        return $value;
    }

    public static function price($value, $thousandSeperator = '')
    {
        if ($thousandSeperator == '') {
            $thousandSeperator = config('settings.thousandSeperator', ',');
        }
        $value = self::makePounds($value);
        return number_format($value, 2, '.', $thousandSeperator);
    }

    /**
     * Function to calculate tax onto a price
     * @param  integer $price   Value in pence
     * @param  integer $taxRate taxRate being charged
     * @return integer          Price after calculation
     */
    public static function calculatetax($price, $taxRate = 20)
    {
        return $price * ($taxRate == 0 ? 1 : $taxRate);
    }

    /**
     * Function to convert decimal price (pounds) to pence
     * @param  float $price Price to 2 decimal places
     * @return integer      Price in pence
     */
    public static function makePence($price)
    {
        // dd(round($price * 100));
        // $price = (int)str_replace('.', '', $price);
        // $price = (int)str_replace(',', '', $price);
        return round($price * 100);
    }

    /**
     * Function to make Pounds from pence price
     * @param  integer $price Value in Pence
     * @return float          Return the value in Pounds to 2 decimal place in nice format
     */
    public static function makePounds($price)
    {
        $value = round($price / 100, 2);
        return number_format($value, 2, '.', '');
    }
}
