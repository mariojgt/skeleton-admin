<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Mariojgt\Magnifier\Models\Media;

class Product extends Model
{
    use HasFactory;

    public function media()
    {
        return $this->belongsToMany(Media::class);
    }
}
