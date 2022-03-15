<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\HtmlString;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class GenericNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $title;
    public $icon;
    public $message;
    public $mail;

    public function __construct($title, $icon, $message, $mail = false)
    {
        $this->title   = $title;    // Notification title
        $this->icon    = $icon;     // Notification icon
        $this->message = $message;  // Notification message
        $this->mail    = $mail;     // Send mail notification default false
    }

    public function via($notifiable)
    {
        if ($this->mail) {
            return ['database', 'mail'];
        } else {
            return ['database'];
        }
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject($this->title)
            ->line(new HtmlString($this->title))
            ->line(new HtmlString($this->message));
    }

    public function toArray($notifiable)
    {
        return [
            'title'   => $this->title,
            'icon'    => $this->icon,
            'content' => $this->message
        ];
    }
}
