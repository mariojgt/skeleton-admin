<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Order;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Order;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\SkeletonAdmin\Models\Product;
use Mariojgt\SkeletonAdmin\Models\OrderLine;
use Illuminate\Validation\ValidationException;
use Mariojgt\SkeletonAdmin\Resource\Backend\OrderResource;

class OrderController extends Controller
{
    /**
     * This function will display the list of orders placed today.
     *
     * @param Request $request
     *
     * @return json
     */
    public function index(Request $request)
    {
        $orders = Order::where('status', 'open')
            ->where('created_at', '>=', date('Y-m-d'))
            ->orderBy('order_name', 'desc')
            ->get();
        return OrderResource::collection($orders);
    }

    /**
     * This function will create a new order.
     *
     * @param Request $request
     *
     * @return json
     */
    public function create(Request $request)
    {
        // Check if the order already exists. where the status is open.
        if (Order::where('order_name', $request->order_name)->where('status', 'open')->exists()) {
            throw ValidationException::withMessages(['Order already exists']);
        }

        $request->validate([
            // Order_name is unique
            'order_name' => ['required', 'string', 'max:255'],
            'products'   => 'required|array',
            'total'      => 'required',
            'total_tax'  => 'required',
            'sub_total'  => 'required',
        ]);

        $money = new Money();

        DB::beginTransaction();
            $order             = new Order();
            $order->order_name = $request->order_name;
            $order->total      = $money->makePennies($request->total);
            $order->tax        = $money->makePennies($request->total_tax);
            $order->subtotal   = $money->makePennies($request->sub_total);
            $order->raw_line   = json_encode($request->products);
            $order->save();

            // Save the order lines
        foreach ($request->products as $product) {
            // Check if the product use stock
            $searchProduct = Product::find($product['id']);
            // If use stock is true we can remove the stock
            if ($searchProduct->use_stock) {
                if ($searchProduct->stock < $product['qty']) {
                    throw ValidationException::withMessages(['The product ' . $searchProduct->name . ' has ' . $searchProduct->stock . ' in stock 😭']);
                }
                $searchProduct->stock = $searchProduct->stock - $product['qty'];
                $searchProduct->save();
            }

            $line                    = new OrderLine();
            $line->order_id          = $order->id;
            $line->product_id        = $product['id'];
            $line->qty               = $product['qty'];
            $line->modification      = json_encode($product['modification']);
            $line->product_allergies = json_encode($product['product_allergies']);
            $line->extras            = json_encode($product['extras']);
            $line->product_price     = $product['price'];
            $line->final_price       = $money->makePennies($product['final_price']);
            $line->tax               = $money->makePennies(($product['final_price'] / 100 ) * $product['tax']);
            $line->subtotal          = $line->final_price - $line->tax;
            $line->save();
        }
        DB::commit();

        return new OrderResource($order);
    }

    /**
     * This function will update an order.
     *
     * @param Request $request
     *
     * @return json
     */
    public function edit(Request $request)
    {
        $order             = Order::findOrFail($request->order_id);

        $request->validate([
            'order_name' => 'required|email|unique:orders,order_name,' . $order->id,
            'order_name' => 'required',
            'products'   => 'required|array',
            'total'      => 'required',
            'total_tax'  => 'required',
            'sub_total'  => 'required',
        ]);

        $money = new Money();

        DB::beginTransaction();
            $order->order_name = $request->order_name;
            $order->total      = $money->makePennies($request->total);
            $order->tax        = $money->makePennies($request->total_tax);
            $order->subtotal   = $money->makePennies($request->sub_total);
            $order->raw_line   = json_encode($request->products);
            $order->save();

            // Delete the order lines
            $order->lines()->delete();

            // Save the order lines
        foreach ($request->products as $product) {
            $line                    = new OrderLine();
            $line->order_id          = $order->id;
            $line->product_id        = $product['id'];
            $line->qty               = $product['qty'];
            $line->modification      = json_encode($product['modification']);
            $line->product_allergies = json_encode($product['product_allergies']);
            $line->extras            = json_encode($product['extras']);
            $line->product_price     = $product['price'];
            $line->final_price       = $money->makePennies($product['final_price']);
            $line->tax               = $money->makePennies(($product['final_price'] / 100 ) * $product['tax']);
            $line->subtotal          = $line->final_price - $line->tax;
            $line->save();
        }
        DB::commit();

        return new OrderResource($order);
    }

    /**
     * This function will return the order details based in the id.
     *
     * @param mixed $order
     *
     * @return json
     */
    public function view($order)
    {
        $order = Order::findOrFail($order);
        return new OrderResource($order);
    }

    /**
     * Close the order and change the status to closed.
     *
     * @param Request $request
     * @param mixed $order
     *
     * @return json
     */
    public function closeOrder(Request $request, $order)
    {
        $order = Order::findOrFail($order);

        // Check if the balance is 0
        if ($order->orderBalance() != 0) {
            throw ValidationException::withMessages(['The order must be paid in order to close 😭']);
        }

        $order->status = 'closed';
        $order->save();

        return new OrderResource($order);
    }
}
