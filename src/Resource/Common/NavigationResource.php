<?php

namespace Mariojgt\SkeletonAdmin\Resource\Common;

use Illuminate\Http\Resources\Json\JsonResource;

class NavigationResource extends JsonResource
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
            'parent_id'  => $this->parent_id,
            'menu_label' => $this->menu_label,
            'route'      => $this->route,
            'sort_order' => $this->sort_order,
            'icon'       => $this->icon,
            'guard'      => $this->guard,
            'collection' => $this->parentCollection($this),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
