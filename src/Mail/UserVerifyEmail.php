<?php

namespace Mariojgt\SkeletonAdmin\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;

class UserVerifyEmail extends Mailable implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $date = Carbon::now()->addMinutes(60);
        $validRoute = route('user.verify', [encrypt($this->user->id), encrypt($date)]);

        return $this->from(env('MAIL_FROM_ADDRESS'))
               ->markdown('skeleton-admin::email.user_verify', compact('validRoute'));
    }
}
