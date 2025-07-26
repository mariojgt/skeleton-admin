<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Mariojgt\Castle\Trait\Castle;
use Mariojgt\Magnifier\Models\Media;
use Mariojgt\SkeletonAdmin\Helpers\Gravatar;
use Mariojgt\SkeletonAdmin\Notifications\AdminMailResetPasswordToken;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Authenticatable implements MustVerifyEmail
{
    use CanResetPassword;
    use Castle;
    use HasApiTokens;
    use HasFactory;
    use HasPermissions;
    use HasRoles;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Send a password reset email to the user.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminMailResetPasswordToken($token));
    }

    protected function adminAvatar(): \Illuminate\Database\Eloquent\Casts\Attribute
    {
        return \Illuminate\Database\Eloquent\Casts\Attribute::make(get: function () {
            if ($this->avatar) {
                return Media::find($this->avatar)->renderFiles()['medium'];
            } else {
                return Gravatar::gravatar($this->email);
            }
        });
    }

    /**
     * The attributes that should be cast to native types.
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
        ];
    }
}
