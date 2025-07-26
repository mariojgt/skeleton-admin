<?php

namespace Mariojgt\SkeletonAdmin\Channels;

use Illuminate\Notifications\Notification;

class DiscordChannel
{
    /**
     * Send the given notification.
     *
     * @param  mixed  $notifiable
     * @return void
     */
    public function send($notifiable, Notification $notification)
    {
        if (method_exists($notification, 'toDiscord')) {
            $notification->toDiscord($notifiable);
        }
    }
}
