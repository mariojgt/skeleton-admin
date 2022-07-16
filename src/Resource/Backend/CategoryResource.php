<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            "id"         => $this->id,
            "name"       => $this->name,
            "till_id"    => [
                "value" => $this->till_id,
                "label" => $this->till->name,
            ],
            "is_active"  => $this->is_active,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
