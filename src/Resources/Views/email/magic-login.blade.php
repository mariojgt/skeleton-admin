@component('mail::message')
# Magic Login Link

Click the button below to log in to your account.
This link will expire in 15 minutes.

@component('mail::button', ['url' => $link])
Login Now
@endcomponent

If you did not request this login, you can safely ignore this email.

If you can't see the button, please copy and paste the following URL into your browser:

{{ $link }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
