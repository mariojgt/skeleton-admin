<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Till extends Model
{
    use HasFactory;

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function categories()
    {
        return $this->hasMany(Category::class, 'till_id', 'id');
    }
}
