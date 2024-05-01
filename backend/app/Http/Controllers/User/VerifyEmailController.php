<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Traits\otpValidation;
use App\Models\otp;
use App\Models\User;
use Illuminate\Http\Request;


class VerifyEmailController extends Controller
{
    use otpValidation;
    public function verify_email(Request $request){
        $validator = $this->otpValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);
        $otp = otp::where('email', $request->email)->first();
        if($otp){
            if($otp->code==$request->otp)
            {
                if($otp->expire_at<=now()){
                    return response(['error' => 'OTP Is Expire']);
                }
                    User::where('email', $request->email)->update(['email_verified_at' => now()]);
                    otp::where('email', $request->email)->update(['expire_at' => now()]);
                return response(['success' => 'Email Verified Successfully']);
            }
            return response(['error' => 'OTP Is Wrong']);
        }
        return response(['error' => 'Enter Valid Email']);
    }
}

