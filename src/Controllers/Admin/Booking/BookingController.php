<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Admin\Booking;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Mariojgt\SkeletonAdmin\Models\Admin;
use Illuminate\Validation\ValidationException;
use Mariojgt\Castle\Helpers\AutenticatorHandle;
use Mariojgt\SkeletonAdmin\Resource\AdminResource;
use Mariojgt\SkeletonAdmin\Helpers\CalendarBuilder;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $calendarManager = new CalendarBuilder();
        $today           = Carbon::now();
        $calendarDays    = $calendarManager->buildCalendar($today);

        return Inertia::render('Booking/Index', [
            'calendarDays' => $calendarDays,
            'today'        => $today,
        ]);
    }
}
