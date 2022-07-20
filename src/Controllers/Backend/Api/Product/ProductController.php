<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\Magnifier\Models\MediaFolder;
use Mariojgt\SkeletonAdmin\Models\Product;
use Mariojgt\SkeletonAdmin\Models\Category;
use Illuminate\Validation\ValidationException;
use Mariojgt\Magnifier\Controllers\MediaController;
use Mariojgt\SkeletonAdmin\Resource\Backend\ProductResource;

class ProductController extends Controller
{

    /**
     * Return the product list
     *
     * @param Request $request
     *
     * @return [type]
     */
    public function index(Request $request)
    {
        $pagination = $request->pagination ?? 10;
        $search     = $request->search ?? null;
        if (empty($search)) {
            $product = Product::paginate($pagination);
        } else {
            $product = Product::where(function ($query) use ($search) {
                return $query
                    ->orWhere(DB::raw("CONCAT(`name`,' ',`sku_code`)"), 'like', '%' . $search . '%');
            })->paginate($pagination);
        }

        return ProductResource::collection($product);
    }

    public function update(Request $request)
    {
        // Validate the till as array
        $request->validate([
            "product"     => 'required|string',
            "name"        => 'required|string',
            "use_stock"   => 'required|string',
            "is_active"   => 'required',
            "stock"       => 'required|numeric',
            "allergies"   => 'required',
            "price"       => 'required|numeric',
            "cost_price"  => 'required|numeric',
            "tax"         => 'required|numeric',
            "category_id" => 'required',
        ]);

        // Import the money function
        $money = new Money();

        DB::beginTransaction();
            $product              = Product::findOrFail($request->product);
            $product->name        = $request->name;
            $product->description = $request->description;
            $product->sku_code    = $request->sku_code;
            $product->category_id = $request->category_id;
            $product->stock       = $request->stock;
            $product->price       = $money->makePennies($request->price);
            $product->cost_price  = $money->makePennies($request->cost_price);
            $product->allergies   = explode(',', $request->allergies);
            $product->tax         = $request->tax;
            // Cast to boolean
            $product->use_stock   = $request->use_stock == 'true' ? true : false;
            $product->is_active   = $request->is_active == 'true' ? true : false;
            $product->save();

            // Detach all the media files
            $product->media()->detach();
            // Attach the media files
            $product->media()->attach($request->medias);

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
            "tax"         => 'required|numeric',
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
            $product->price       = $money->makePennies(Request('price'));
            $product->cost_price  = $money->makePennies(Request('cost_price'));
            $product->tax         = Request('tax');
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

    public function search(Request $request)
    {
        $request->validate([
         'search'       => 'required',
        ]);

        $search = $request->search;

        $product = Product::where(function ($query) use ($search) {
            return $query
                ->where('id', 'like', '%' . $search . '%')
                ->orWhere(DB::raw("CONCAT(`name`,' ',`sku_code`)"), 'like', '%' . $search . '%');
        })->first();

        if (!empty($product)) {
            // If use stock is true we can remove the stock
            if ($product->use_stock && empty($request->read)) {
                if ($product->stock <= 0) {
                    throw ValidationException::withMessages(['The product ' . $product->name . ' is out of stock 😭']);
                }
            }
            return new ProductResource($product);
        } else {
            return response()->json([
                'message' => 'Product not found',
                'status'  => false,
            ]);
        }
    }

    public function updateMainImage(Request $request)
    {
        $request->validate([
            'product'  => 'required',
            'media_id' => 'required',
          ]);

        $product                    = Product::findOrfail($request->product);
        $product->featured_media_id = $request->media_id;
        $product->save();

        return response()->json([
            'message' => 'Product image updated successfully',
        ]);
    }

    /**
     * Search in the extra sections of the product.
     * @param Request $request
     *
     * @return [type]
     */
    public function extras(Request $request)
    {

        $search = $request->search ?? null;

        $extraCategory = Category::where('name', 'extras')->first();
        if (empty($extraCategory)) {
            $extraCategory            = new Category();
            $extraCategory->name      = 'extras';
            $extraCategory->is_active = 1;
            $extraCategory->save();
        }

        // Get the products
        if (!empty($search)) {
            $products = $extraCategory->products()->where('is_active', 1)->where(function ($query) use ($search) {
                return $query
                ->orWhere(DB::raw("CONCAT(`name`,' ',`sku_code`)"), 'like', '%' . $search . '%');
            })->paginate(5);
        } else {
            $products = $extraCategory->products()->where('is_active', 1)->paginate(5);
        }

        return ProductResource::collection($products);
    }
}
