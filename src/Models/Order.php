<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function lines()
    {
        return $this->hasMany(OrderLine::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function orderBalance()
    {
        return $this->total - $this->payments()->sum('amount');
    }

}
