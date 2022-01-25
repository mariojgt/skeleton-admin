<?php

namespace Mariojgt\SkeletonAdmin\Resource;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource
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
            'avatar'            => 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png',
            'email'             => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at,
        ];
    }
}
