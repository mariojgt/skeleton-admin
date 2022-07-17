<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Mariojgt\Magnifier\Models\Media;
use Illuminate\Database\Eloquent\Model;
use Mariojgt\SkeletonAdmin\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    public function media()
    {
        return $this->belongsToMany(Media::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function mainImage()
    {
        return $this->belongsTo(Media::class, 'featured_media_id');
    }
}
