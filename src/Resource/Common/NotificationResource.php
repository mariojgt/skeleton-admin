<?php

namespace Mariojgt\SkeletonAdmin\Resource\Common;

use Mariojgt\SkeletonAdmin\Helpers\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
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
            'id'   => $this->id,
            'data' => $this->data,
        ];
    }
}
