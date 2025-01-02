<?php

namespace Mariojgt\SkeletonAdmin\Resource\Common;

use Illuminate\Http\Resources\Json\JsonResource;

class NavbarResource extends JsonResource
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
            'id'         => $this->id,
            'menu_label' => $this->menu_label,
            'route'      => route($this->route),
            'icon'       => $this->icon,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
