<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Http\Resources\Json\JsonResource;

class LiveProductResource extends JsonResource
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
        // Return the live product data
        return [
            'unique_number' => rand(1000, 9000),
            'id'            => $this->id,
            'order_id'      => $this->order_id,
            'name'          => $this->product->name,
            'qty'           => $this->qty,
            'modification'  => json_decode($this->modification),
            'extras'        => json_decode($this->extras),
            'status'        => $this->status,
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at,
            'completed_at'  => $this->completed_at?->diffForHumans(),
            // How long ago the order was placed in minutes
            'minute_diff'   => $this->created_at->diffInMinutes(),
            'seconds_diff'  => 0,
        ];
    }
}
