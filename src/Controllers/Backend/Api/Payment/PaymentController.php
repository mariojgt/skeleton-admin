<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Payment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Mariojgt\SkeletonAdmin\Models\Order;
use Mariojgt\SkeletonAdmin\Helpers\Money;
use Mariojgt\SkeletonAdmin\Models\Payment;
use Mariojgt\SkeletonAdmin\Resource\Backend\OrderResource;

class PaymentController extends Controller
{
    public function makePayment(Request $request, $order)
    {
        $order = Order::findOrFail($order);

        $request->validate([
          'payment_type' => 'required',
          'amount'       => 'required',
        ]);

        $money = new Money();

        DB::beginTransaction();
        // Create the payment
        $this->createPayment($order, $money->makePennies($request->amount), 'paid', '', $request->payment_type);
        // Refresh the order
        $order->fresh();

        if ($order->orderBalance() <= 0) {
            // Create the payment
            $this->createPayment($order, $order->orderBalance(), 'change', 'Customer change', 'system');
        }

        DB::commit();
        return new OrderResource($order);
    }

    public function createPayment(Order $order, $amount, $status, $description, $type)
    {
        $payment              = new Payment();
        $payment->order_id    = $order->id;
        $payment->amount      = $amount;
        $payment->status      = $status;
        $payment->type        = $type;
        $payment->description = $description;
        $payment->save();
    }

}