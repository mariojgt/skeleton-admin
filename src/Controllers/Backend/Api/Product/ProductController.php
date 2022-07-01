<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\Magnifier\Models\MediaFolder;
use Mariojgt\SkeletonAdmin\Models\Product;
use Mariojgt\SkeletonAdmin\Models\Category;
use Mariojgt\Magnifier\Controllers\MediaController;
use Mariojgt\SkeletonAdmin\Resource\Backend\CategoryResource;
use Mariojgt\SkeletonAdmin\Resource\Common\NotificationResource;

class ProductController extends Controller
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

    public function update(Request $request, $till)
    {
        // Validate the till as array
        $request->validate([
            'name'      => 'required|string',
            'is_active' => 'required|boolean',
        ]);

        $tillUpdate            = Category::findOrFail($till);
        $tillUpdate->name      = $request->name;
        $tillUpdate->is_active = $request->is_active;
        $tillUpdate->save();

        return response()->json([
            'message' => 'Category updated',
        ]);
    }

    public function create(Request $request)
    {
        // Validate the till as array
        $request->validate([
            "name"        => 'required|string',
            "use_stock"   => 'required|string',
            "is_active"   => 'required',
            "stock"       => 'required|numeric',
            "allergies"   => 'required',
            "price"       => 'required|numeric',
            "cost_price"  => 'required|numeric',
            "category_id" => 'required',
        ]);

        // Import the money function
        $money = new Money();

        DB::beginTransaction();
            $product              = new Product();
            $product->name        = Request('name');
            $product->description = Request('description');
            $product->sku_code    = Request('sku_code');
            $product->category_id = Request('category_id');
            $product->stock       = Request('stock');
            $product->price       = $money->makePence(Request('price'));
            $product->cost_price  = $money->makePence(Request('cost_price'));
            $product->allergies   = Request('allergies');
            // Cast to boolean
            $product->use_stock   = Request('use_stock') == 'true' ? true : false;
            $product->is_active   = Request('is_active') == 'true' ? true : false;
            $product->save();

            // Upload the images
            if (!empty(Request('files'))) {
                // Loop through the images and attach them to the product
                $media  = new MediaController();
                $folder = MediaFolder::where('name', 'media')->first();
                // Attach the images to the product
                foreach (Request('files') as $image) {
                    $newRequest = new Request();
                    $newRequest->merge(['file' => $image]);
                    $file = $media->upload($newRequest, $folder->id);
                    $product->media()->attach($file->getData()->data->id);
                }
                // Save the media
                $product->featured_media_id = $product->media()->first()->id;
            }

            $product->save();

        DB::commit();

        return response()->json([
            'message' => 'Product created',
        ]);
    }
}
