<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Category;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Models\Category;
use Mariojgt\SkeletonAdmin\Resource\Backend\CategoryResource;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class CategoryController extends Controller
{
    /**
     * Return the last notifications.
     *
     * @param int $amount
     *
     * @return [type]
     */
    public function index(Request $request)
    {
        $category = Category::paginate(10);

        return CategoryResource::collection($category);
    }

    public function update(Request $request, $category)
    {
        $category            = Category::findOrFail($category);
        // Validate the till as array
        $request->validate([
            'name'      => 'required|unique:categories,name,' . $category->id,
            'till_id'   => 'required',
            'is_active' => 'required|boolean',
        ]);

        $category->name      = $request->name;
        $category->till_id   = $request->till_id['value'];
        $category->is_active = $request->is_active;
        $category->save();

        return response()->json([
            'message' => 'Category updated',
        ]);
    }

    public function create(Request $request)
    {
        // Validate the till as array
        $request->validate([
            'name'      => ['required', 'string', 'max:255', 'unique:categories'],
            'till_id'   => 'required',
            'is_active' => 'required|boolean',
        ]);

        $category            = new Category();
        $category->name      = $request->name;
        $category->till_id   = $request->till_id['value'];
        $category->is_active = $request->is_active;
        $category->save();

        return response()->json([
            'message' => 'Tills created',
        ]);
    }
}
