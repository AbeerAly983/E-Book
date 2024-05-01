<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\otpctroller;
use App\Http\Traits\otpValidation;
use App\Models\Admin;
use App\Notifications\resend;
use Illuminate\Http\Request;

class forgotPasswordController extends Controller
{
    use otpValidation;


    public function forgot_password(Request $request){
        $otp= (new otpctroller())->changeOtp($request->email);
        $validator = $this->resendAdminValidation($request->all());
        if($validator->fails()){
            return response(['error' => $validator->errors()]);}
        $user = Admin::where('email' ,$request->email)->first();
        $user->notify(new resend());
        return response(['sucess'=>true],200);
    }
}
