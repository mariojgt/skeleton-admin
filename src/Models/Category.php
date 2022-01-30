<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * Get all this chinldren category
     *
     * @return collection [Category]
     */
    public function child()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    /**
     * Get the collection of the parent category
     *
     * @param mixed $category
     *
     * @return array [collection]
     */
    public function parentCollection($category)
    {
        $child    = $category->child()->orderBy('sort_order', 'ASC')->get();
        $children = [];
        foreach ($child as $cat) {
            $children[] = [
                'id'    => $cat->id,
                'name'  => $cat->name,
                'slug'  => $cat->slug,
                'child' => $this->parentCollection($cat)
            ];
        }
        return $children;
    }
}
