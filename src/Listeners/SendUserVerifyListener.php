<?php

namespace Mariojgt\SkeletonAdmin\Listeners;

use Illuminate\Support\Facades\Mail;
use Mariojgt\SkeletonAdmin\Events\UserVerifyEvent;
use Mariojgt\SkeletonAdmin\Mail\UserVerifyEmail;

class SendUserVerifyListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Send the user a link so we can verify the email.
     */
    public function handle(UserVerifyEvent $event): void
    {
        Mail::to($event->user)->send(new UserVerifyEmail($event->user));
    }
}
