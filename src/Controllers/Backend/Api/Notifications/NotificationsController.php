<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Notifications;

use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class NotificationsController extends Controller
{
    /**
     * Return the last notifications.
     */
    public function index($amount = 10)
    {
        // Find the admin the user
        $user = backendGuard()->user();
        // Get the notifications not read
        $notifications = $user
            ->notifications()
            ->where('read_at', null)
            ->orderBy('created_at', 'desc')
            ->take($amount)
            ->get();

        return NotificationResource::collection($notifications);
    }

    /**
     * Read all the user notifications.
     */
    public function read()
    {
        // Find the user
        $user = backendGuard()->user();
        // Get the notifications not read
        $notifications = $user->notifications()->where('read_at', null)->get();

        foreach ($notifications as $notification) {
            $notification->markAsRead();
        }

        return response()->json(['success' => true]);
    }
}
