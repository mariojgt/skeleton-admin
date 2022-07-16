<?php

namespace Mariojgt\SkeletonAdmin\Resource\Backend;

use Illuminate\Support\Str;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\Magnifier\Resources\MediaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'id'               => $this->id,
            'order_id'         => $this->order_id,
            'amount'           => $this->amount,
            'formatted_amount' => $money->makePenniesToFloat($this->amount),
            'status'           => $this->status,
            'type'             => $this->type,
            'description'      => $this->description,
            'created_at'       => $this->created_at,
            'updated_at'       => $this->updated_at,
            'ago'              => $this->created_at->diffForHumans(),
            'user'             => new AdminResource($this->user),
        ];
    }
}
