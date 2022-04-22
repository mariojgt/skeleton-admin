<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Frontend\Api\Notifications;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class NotificationsController extends Controller
{
    /**
     * Return the last notifications
     *
     * @param int $amount
     *
     * @return [type]
     */
    public function index($amount = 10)
    {
        // FInd the user
        $user = Auth::user();
        // Get the notifications not read
        $notifications = $user->notifications()->where('read_at', null)->orderBy('created_at', 'desc')->take($amount)->get();

        return NotificationResource::collection($notifications);
    }

    /**
     * Read all the user notifications
     *
     * @return [type]
     */
    public function read()
    {
        // FInd the user
        $user = Auth::user();
        // Get the notifications not read
        $notifications = $user->notifications()->where('read_at', null)->get();

        foreach ($notifications as $notification) {
            $notification->markAsRead();
        }

        return response()->json(['success' => true]);
    }
}
