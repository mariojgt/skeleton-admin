<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Illuminate\Support\Facades\Mail;
use Mariojgt\UnityAdmin\Mail\GenericEmail;
use Mariojgt\UnityAdmin\Models\EmailLayout;

class EmailHelper
{
    /**
     * Send the generic email.
     *
     * @param mixed $data
     * @param mixed $emailLayout
     * @param null  $email
     *
     * @return [mail]
     */
    public static function send($data, $emailLayout, $email = null)
    {
        // Looking for the Email tempalte
        $emailLayout = EmailLayout::where('name', $emailLayout)->firstOrFail();
        // Get all the emailLayout Colection variables
        $stringToReplace = json_decode($emailLayout->variables->variables);

        // Creating the subject based in the variable
        $subject = $emailLayout->subject;
        foreach ($stringToReplace as $key => $value) {
            $subject = str_replace($value, $data[$value], $subject);
        }

        // Creating the content based in the varaible
        $content = $emailLayout->content;
        foreach ($stringToReplace as $key => $value) {
            $content = str_replace($value, $data[$value], $content);
        }

        // Add the sender email
        if (empty($email)) {
            $email = config('mail.from.address');
        }

        // Trigger the email
        Mail::to($email)->send(new GenericEmail($subject, $content));
    }

    /**
     * @param mixed       $data
     * @param EmailLayout $emailLayout
     * @param null        $email
     *
     * @return [GenericEmail]
     */
    public static function view($data, EmailLayout $emailLayout, $email = null)
    {
        $stringToReplace = json_decode($emailLayout->variables->variables);

        // Creating the subject
        $subject = $emailLayout->subject;
        foreach ($stringToReplace as $key => $value) {
            $subject = str_replace($value, $data[$value], $subject);
        }

        // Creating the content
        $content = $emailLayout->content;
        foreach ($stringToReplace as $key => $value) {
            $content = str_replace($value, $data[$value], $content);
        }

        if (empty($email)) {
            $email = config('mail.from.address');
        }

        return new GenericEmail($subject, $content);
    }
}
