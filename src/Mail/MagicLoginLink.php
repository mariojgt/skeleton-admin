<?php

namespace Mariojgt\SkeletonAdmin\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MagicLoginLink extends Mailable
{
    use Queueable, SerializesModels;

    public string $link;

    public function __construct($link)
    {
        $this->link = $link;
    }

    public function build()
    {
        return $this->subject('Your Magic Login Link')
            ->markdown('skeleton-admin::email.magic-login', [
                'link' => $this->link,
            ]);
    }
}
