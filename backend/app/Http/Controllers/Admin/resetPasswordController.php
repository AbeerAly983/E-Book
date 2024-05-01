<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\passwordValidation;
use App\Models\Admin;
use App\Models\otp;
use App\Models\User;
use Illuminate\Http\Request;


class resetPasswordController extends Controller
{
    use passwordValidation;


    public function reset_password(Request $request){
        $validator = $this->resetAdminValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);
        $otp = otp::where('email', $request->email)->first();
        if($otp){
            if($otp->code==$request->otp)
            {
                if($otp->expire_at<now()){
                    return response(['error' => 'OTP Is Wrong']);
                }
                $admin = Admin::where('email', $request->email)->first();
                $admin->password = bcrypt($request->password);
                $admin->save();
                return response(['success' => 'Password Reset Successfully']);
            }
            return response(['error' => 'OTP Is Wrong']);
        }
        return response(['error' => 'Enter Valid Email']);
    }
}
