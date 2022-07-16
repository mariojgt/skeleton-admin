<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\LiveProduct;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Till;
use Mariojgt\SkeletonAdmin\Models\OrderLine;
use Mariojgt\SkeletonAdmin\Resource\Backend\LiveProductResource;

class LiveProductController extends Controller
{
    public function index(Request $request, $till)
    {
        $till = Till::findOrFail($till);
        // Get all the products related to the categories of the till
        $productIds = $till->categories->map(function ($category) {
            return $category->products;
        })->flatten()->pluck('id')->toArray();

        // Get all the todays order lines where the product is in the list and created_at is in the last 15 minutes
        $orderLines =  OrderLine::whereIn('product_id', $productIds)
            // ->where('created_at', '>=', now()->subMinutes(40))
            ->where('status', 'placed')
            ->orderBy('created_at', 'desc')
            ->get();

        return LiveProductResource::collection($orderLines);
    }

    public function printItem(Request $request, $line)
    {
        $orderLines =  OrderLine::findOrFail($line);
        $orderLines->status = 'printed';
        $orderLines->save();

        return response()->json(['success' => true]);
    }
}
