<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Laravel\Sanctum\HasApiTokens;
use Mariojgt\Castle\Trait\Castle;
use App\Helpers\UserCreationManager;
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
        'gateway_customer_ids', // New JSON field replacing stripe_id
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
        'gateway_customer_ids' => 'json',
    ];

    /**
     * Boot method for model events
     */
    protected static function booted()
    {
        // Automatically create a user level when a user is created
        static::created(function ($user) {
            UserCreationManager::onUserCreated($user);
        });
    }

    /**
     * Get user's social accounts
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
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

    /**
     * Get customer ID for a specific payment gateway
     *
     * @param string $gateway Gateway identifier (e.g., 'stripe', 'paypal')
     * @return string|null Customer ID for the specified gateway or null if not found
     */
    public function getGatewayCustomerId(string $gateway): ?string
    {
        // First check the new gateway_customer_ids JSON field
        if (!empty($this->gateway_customer_ids) && isset($this->gateway_customer_ids[$gateway])) {
            return $this->gateway_customer_ids[$gateway];
        }

        // For backward compatibility with stripe_id
        if ($gateway === 'stripe' && !empty($this->stripe_id)) {
            return $this->stripe_id;
        }

        return null;
    }

    /**
     * Set customer ID for a specific payment gateway
     *
     * @param string $gateway Gateway identifier (e.g., 'stripe', 'paypal')
     * @param string $customerId Customer ID to store
     * @return self
     */
    public function setGatewayCustomerId(string $gateway, string $customerId): self
    {
        // Initialize gateway_customer_ids as empty array if null
        if (empty($this->gateway_customer_ids)) {
            $this->gateway_customer_ids = [];
        }

        // Set the customer ID for the specified gateway
        $customerIds = $this->gateway_customer_ids;
        $customerIds[$gateway] = $customerId;
        $this->gateway_customer_ids = $customerIds;

        $this->save();

        return $this;
    }

    /**
     * Check if user has a customer ID for a specific payment gateway
     *
     * @param string $gateway Gateway identifier (e.g., 'stripe', 'paypal')
     * @return bool Whether user has a customer ID for the specified gateway
     */
    public function hasGatewayCustomerId(string $gateway): bool
    {
        return $this->getGatewayCustomerId($gateway) !== null;
    }
}
