<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Laravel\Sanctum\HasApiTokens;
use Mariojgt\Castle\Trait\Castle;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Mariojgt\SkeletonAdmin\Helpers\Gravatar;
use Spatie\Permission\Traits\HasPermissions;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use Castle;
    use HasRoles;
    use HasPermissions;

   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'first_name',
        'last_name',
        'email',
        'password',
        'stripe_id',
        'avatar',
        'registration_type',
        'email_verified_at'
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

    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }

    /**
     * Get the avatar path
     *
     * @return string
     */
    public function getAvatarPath()
    {
        // If user has a custom avatar, use it
        if (!empty($this->avatar) && $this->avatar !== null) {
            // Check if it's a full URL or just a filename
            if (filter_var($this->avatar, FILTER_VALIDATE_URL)) {
                return $this->avatar;
            }

            // Check if it's a path from the avatars directory
            if (str_contains($this->avatar, 'assets/avatars')) {
                return asset($this->avatar);
            }

            // Otherwise assume it's just a filename
            return asset('assets/avatars/' . $this->avatar);
        }

        // Fallback to Gravatar
        return Gravatar::gravatar($this->email);
    }
}
