<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\BookUser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Stripe\Charge;
use Stripe\Stripe;



use Stripe\PaymentIntent;
use Illuminate\Http\Request as IlluminateRequest;

class StripeController extends Controller
{
    public function checkout()
    {
        return Response()->json(['message' => 'Payment Failed']);
    }

    public function makePayment(Request $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));

        $paymentMethod = $request->paymentMethod;
        $book_name = $request->get('book_name');
        $book_id = $request->get('book_id');
        $price = $request->get('price');
        $user_id = $request->get('user_id');

        $user=DB::table('book_user')->where('user_id',$user_id)->where('book_id',$book_id)->first();
        if($user){
            return response()->json(['message' => 'You have already buy this book']);
        }

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $price,
                'currency' => 'EGP',
                'payment_method' => $paymentMethod,
                'description' => $book_name,
                'confirm' => true,
                'return_url' => route('success', ['book_id' => $book_id, 'user_id' => $user_id, 'price' => $price/100]),
            ]);

            return $this->success(['book_id' => $book_id, 'user_id' => $user_id, 'price' => $price/100]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }


public function success(array $requestData)
{
    $request = new Request($requestData);
    $product = BookUser::create([
        'book_id' => $request->book_id,
        'price' => $request->price,
        'user_id' => $request->user_id,
    ]);

    return response()->json(['message' => 'Payment completed successfully']);
}
}
