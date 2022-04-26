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
        // The image is a example
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'avatar'            => Gravatar::gravatar($this->email),
            'email'             => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at,
        ];
    }
}
