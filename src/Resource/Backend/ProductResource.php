<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Support\Str;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\Magnifier\Resources\MediaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'id'                            => $this->id,
            'unique_key'                    => Str::random(12),
            'description'                   => $this->description,
            'name'                          => $this->name,
            'sku_code'                      => $this->sku_code,
            'category'                      => $this->category,
            'price'                         => $this->price,
            'cost_price'                    => $this->cost_price,
            'tax'                           => $this->tax,
            'formatted_price'               => $money->makePenniesToFloat($this->price),
            'formatted_cost_price'          => $money->makePenniesToFloat($this->cost_price),
            'formatted_price_currency'      => '£' . $money->makePenniesToFloat($this->price),
            'formatted_cost_price_currency' => '£' . $money->makePenniesToFloat($this->cost_price),
            'allergies'                     => $this->allergies,
            'use_stock'                     => $this->use_stock,
            'stock'                         => $this->stock,
            'is_active'                     => $this->is_active,
            'featured_media_id'             => $this->featured_media_id,
            'main_image'                    => new MediaResource($this->mainImage),
            'images'                        => MediaResource::collection($this->media),
            'created_at'                    => $this->created_at,
            'updated_at'                    => $this->updated_at,
        ];
    }
}
