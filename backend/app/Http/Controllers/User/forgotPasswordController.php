<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Controllers\otpctroller;
use App\Http\Traits\otpValidation;
use App\Models\otp;
use App\Models\User;
use App\Notifications\resend;
use Illuminate\Http\Request;

class forgotPasswordController extends Controller
{
    use otpValidation;

    public function forgot_password(Request $request){
        $validator = $this->resendValidation($request->all());
        if($validator->fails()){
            return response(['error' => $validator->errors()]);}

        $user = User::where('email' ,$request->email)->first();
        $user->notify(new resend());
        return response(['sucess'=>true],200);
    }
}
