<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }
}
