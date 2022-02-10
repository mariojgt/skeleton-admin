<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Carbon\Carbon;

/**
 * Helper Class to help with various date stuff
 */
class Dates
{
    /**
     * Function to convert a from - to into a Carbon array
     *
     * @param string $start
     * @param string $end
     * @param integer $interval
     * @param string $unit
     * @return Carbon array for range
     */
    public static function dateRange($start, $end = false, $interval = 1, $unit = 'days')
    {
        return $range = Carbon::parse($start)
            ->range(Carbon::parse($end ?? now()), $interval, $unit)
            ->toArray();
    }

    /**
     * function to return a range from - to
     *
     * @param string $date
     * @param integer $interval
     * @param string $unit
     * @return Carbon array for range
     */
    public static function weekRange($date = false, $interval = 1, $unit = 'days')
    {
        $date      = Carbon::parse($date ?? now());
        $weekStart = $date->startOfWeek()->format('Y-m-d');
        $weekEnd   = $date->endOfWeek()->format('Y-m-d');
        return Carbon::parse($weekStart)->range($weekEnd, $interval, $unit)->toArray();
    }

    /**
     * function to return all dates for month
     *
     * @param string $month Must be valid date
     * @param integer $interval
     * @param string $unit
     * @return Carbon array of range
     */
    public static function monthRange($month = false, $interval = 1, $unit = 'days')
    {
        $date       = Carbon::parse($month ?? now());
        $monthStart = $date->startOfMonth()->format('Y-m-d');
        $monthEnd   = $date->endOfMonth()->format('Y-m-d');
        return Carbon::parse($monthStart)->range($monthEnd, $interval, $unit)->toArray();
    }
}
