<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Support\Str;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\Magnifier\Resources\MediaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderLinesResource extends JsonResource
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
            'order_id'                => $this->order_id,
            'product_id'              => $this->product_id,
            'name'                    => $this->product->name,
            'qty'                     => $this->qty,
            'modification'            => $this->modification,
            'extras'                  => $this->extras,
            'product_price'           => $this->product_price,
            'final_price'             => $this->final_price,
            'tax'                     => $this->tax,
            'subtotal'                => $this->subtotal,
            'formatted_product_price' => $money->makePenniesToFloat($this->product_price),
            'formatted_final_price'   => $money->makePenniesToFloat($this->final_price),
            'formatted_tax'           => $money->makePenniesToFloat($this->tax),
            'formatted_subtotal'      => $money->makePenniesToFloat($this->subtotal),
        ];
    }
}
