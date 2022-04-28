<?php

namespace Mariojgt\SkeletonAdmin\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

/**
 * Trigger a generic notification to the backend or frontend.
 */
class GenericNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $title;
    public $icon;
    public $message;
    public $mail;
    public $type;

    public function __construct($title, $icon, $message, $type = 'icon', $mail = false)
    {
        $this->title   = $title;    // Notification title
        $this->icon    = $icon;     // Notification icon // success, info, warning, error
        $this->message = $message;  // Notification message
        $this->type    = $type;     // can be a icon or image
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
        return (new MailMessage())
            ->subject($this->title)
            ->line(new HtmlString($this->title))
            ->line(new HtmlString($this->message));
    }

    public function toArray($notifiable)
    {
        return [
            'title'   => $this->title,
            'icon'    => $this->icon,
            'content' => $this->message,
            'type'    => $this->type,
        ];
    }
}
