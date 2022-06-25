<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Laravel\Sanctum\HasApiTokens;
use Mariojgt\Castle\Trait\Castle;
use Mariojgt\Magnifier\Models\Media;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Mariojgt\SkeletonAdmin\Helpers\Gravatar;
use Spatie\Permission\Traits\HasPermissions;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Mariojgt\SkeletonAdmin\Notifications\AdminMailResetPasswordToken;

class Admin extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use Castle;
    use CanResetPassword;
    use HasRoles;
    use HasPermissions;

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
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Send a password reset email to the user.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminMailResetPasswordToken($token));
    }

    public function getAdminAvatarAttribute()
    {
        if ($this->avatar) {
            return Media::find($this->avatar)->renderFiles()['medium'];
        } else {
            return Gravatar::gravatar($this->email);
        }
    }
}
