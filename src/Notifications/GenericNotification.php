<?php
namespace Mariojgt\SkeletonAdmin\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Facades\Http;

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
    public $discord;  // New property to control Discord notification

    public function __construct(
        string $title,
        string $icon,
        string $message,
        string $type = 'icon',
        bool $mail = false,
        bool $discord = false  // New parameter
    ) {
        $this->title = $title;     // Notification title
        $this->icon = $icon;       // Notification icon // success, info, warning, error
        $this->message = $message; // Notification message
        $this->type = $type;       // can be a icon or image
        $this->mail = $mail;       // Send mail notification default false
        $this->discord = $discord; // Send discord notification default false
    }

    public function via($notifiable)
    {
        $channels = ['database'];

        if ($this->mail) {
            $channels[] = 'mail';
        }

        if ($this->discord) {
            $channels[] = 'discord';
        }
        return $channels;
    }

    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->subject($this->title)
            ->line(new HtmlString($this->title))
            ->line(new HtmlString($this->message));
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => $this->title,
            'icon' => $this->icon,
            'content' => $this->message,
            'type' => $this->type,
        ];
    }

    // New method for Discord
    public function toDiscord($notifiable)
    {

        // Get the Discord webhook URL from config (we'll add this later)
        $webhookUrl = config('services.discord.webhook_url');

        if (empty($webhookUrl)) {
            return;
        }

        // Map notification icons to Discord colors
        $colorMap = [
            'success' => '65280',    // Green
            'info'    => '3447003',  // Blue
            'warning' => '16776960', // Yellow
            'error'   => '15158332', // Red
        ];

        // Default color if icon not in map
        $color = $colorMap[$this->icon] ?? '7506394'; // Gray if unknown

        // Create the Discord embed
        $embed = [
            'title' => $this->title,
            'description' => strip_tags($this->message),
            'color' => intval($color),
        ];

        // Send the embed to Discord
        $request = Http::post($webhookUrl, [
            'embeds' => [$embed],
        ]);
    }

    // This method is called if toDatabase() is not defined
    public function toArray($notifiable)
    {
        return [
            'title' => $this->title,
            'icon' => $this->icon,
            'content' => $this->message,
            'type' => $this->type,
        ];
    }
}
