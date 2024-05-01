<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\otp;
use Illuminate\Http\Request;

class otpctroller extends Controller
{
    public function generateOtp($email){
        $otp=rand(100000,999999);
        otp::create([
            'email'=>$email,
            'code'=>$otp,
            'expire_at'=>now()->addMinute(5),

        ]);
        return $otp;
    }
    public function changeOtp($email){
        $otp=rand(100000,999999);
        otp::where('email', $email)->update([
            'code'=>$otp,
            'expire_at'=>now()->addMinute(5),
        ]);
        return $otp;
    }
}
