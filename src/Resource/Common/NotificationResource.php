<?php

namespace Mariojgt\SkeletonAdmin\Resource\Common;

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
        // Return the notification information
        return [
            'id'   => $this->id,
            'data' => $this->data,
            'date' => $this->created_at->diffForHumans(),
        ];
    }
}
