<?php
namespace Mariojgt\SkeletonAdmin\Resource\Frontend;

use Illuminate\Http\Resources\Json\JsonResource;
use Mariojgt\SkeletonAdmin\Helpers\Gravatar;

class UserResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'username'          => $this->username,
            'first_name'        => $this->first_name,
            'last_name'         => $this->last_name,
            'avatar'            => $this->getAvatarPath(),
            'email'             => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'password'          => $this->password,
            'remember_token'    => $this->remember_token,
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at,
        ];
    }
}
