<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Support\Str;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\Magnifier\Resources\MediaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
        $money = new Money();

        // The image is a example
        return [
            'id'                 => $this->id,
            'order_name'         => $this->order_name,
            'raw_line'           => $this->raw_line,
            'total'              => $this->total,
            'tax'                => $this->tax,
            'subtotal'           => $this->subtotal,
            'formatted_total'    => $money->makePenniesToFloat($this->total),
            'formatted_tax'      => $money->makePenniesToFloat($this->tax),
            'formatted_subtotal' => $money->makePenniesToFloat($this->subtotal),
            'lines'              => OrderLinesResource::collection($this->lines),
            'created_at'         => $this->created_at,
            'updated_at'         => $this->updated_at,
        ];
    }
}
