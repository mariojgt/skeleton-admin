<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Carbon\Carbon;

/**
 * Helper Class to help with various calendar math stuff
 */
class CalendarBuilder
{
    /**
     * This fuction will create a calendar for the month we want using a start date
     * @param Carbon $start_date
     *
     * @return [type]
     */
    public function buildCalendar(Carbon $start_date)
    {
        // Get the start day of the month
        $start_date = Carbon::parse(Request('date'))->startOfMonth();
        // Based in the date get the last day of the month
        $end_date   = Carbon::parse(Request('date'))->endOfMonth();

        // Check if the first of the month starts on a monday
        $weekNameDay = $start_date->format('l');
        // Depenf on the day we make so need to start on a monday
        switch ($weekNameDay) {
            case 'Tuesday':
                $start_date = $start_date->subDays(1);
                break;
            case 'Wednesday':
                $start_date = $start_date->subDays(2);
                break;
            case 'Thursday':
                $start_date = $start_date->subDays(3);
                break;
            case 'Friday':
                $start_date = $start_date->subDays(4);
                break;
            case 'Saturday':
                $start_date = $start_date->subDays(5);
                break;
            case 'Sunday':
                $start_date = $start_date->subDays(6);
                break;
            default:
                // DO NOTHING
                break;
        }

        $dates = [];

        // Loop the time range
        for ($date = $start_date->copy(); $date->lte($end_date); $date->addDay()) {

            // Get the staff range
            $dates[] = [
                'date'            => $date->format('Y-m-d'),
                'day_of_the_week' => $date->format('l'),
                'day'             => $date->format('d'),
                'month'           => $date->format('m'),
            ];
        }

        // Return the dates sperated by chunks of 7
        return collect($dates);
    }
}
