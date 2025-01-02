<?php

namespace Mariojgt\SkeletonAdmin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Navigation extends Model
{
    use HasFactory;

    /**
     * Get all this chinldren category
     *
     * @return collection [Category]
     */
    public function child()
    {
        return $this->hasMany(Navigation::class, 'parent_id', 'id');
    }

    /**
     * Get the collection of the parent category
     *
     * @param mixed $category
     *
     * @return array [collection|null]
     */
    public function parentCollection($navigation)
    {
        $child    = $navigation->child()->orderBy('sort_order', 'ASC')->get();
        $children = null;
        foreach ($child as $cat) {
            $children[] = [
                'id'         => $cat->id,
                'menu_label' => $cat->menu_label,
                'route'      => $cat->route,
                'icon'       => $cat->icon,
                'child'      => $this->parentCollection($cat)
            ];
        }

        return $children;
    }
}
