<?php

namespace Mariojgt\SkeletonAdmin\Controllers\FrontEnd\Api\Notifications;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class NotificationController extends Controller
{
    protected $userModel;

    public function __construct()
    {
        $this->userModel = config('skeleton.front_end_notification_user_model');
    }

    /**
     * Return the last notifications.
     */
    public function index($amount = 10)
    {
        $notifications = [];
        foreach ($this->userModel as $model) {
            $user = $model::find(Auth::user()->id);
            if ($user) {
                $notifications[] = $user->notifications()
                    ->where('read_at', null)
                    ->orderBy('created_at', 'desc')
                    ->take($amount)
                    ->get();
            }
        }
        // Flatten the array
        $notifications = collect($notifications)->flatten();

        return NotificationResource::collection($notifications);
    }

    /**
     * Read all the user notifications.
     */
    public function read()
    {
        $notifications = [];
        foreach ($this->userModel as $model) {
            $user = $model::find(Auth::user()->id);
            if ($user) {
                $notifications[] = $user->notifications()
                    ->where('read_at', null)
                    ->orderBy('created_at', 'desc')
                    ->get();
            }
        }

        // Flatten the array
        $notifications = collect($notifications)->flatten();

        foreach ($notifications as $notification) {
            $notification->markAsRead();
        }

        return response()->json(['success' => true]);
    }
}
