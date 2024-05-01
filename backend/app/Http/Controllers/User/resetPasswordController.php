<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Traits\passwordValidation;
use App\Models\otp;
use App\Models\User;
use Illuminate\Http\Request;

class resetPasswordController extends Controller
{
    use passwordValidation;

    public function reset_password(Request $request){
        $validator = $this->resetValidation($request->all());
        if($validator->fails()){
            return response(['error' => $validator->errors()]);}

        $otp = otp::where('email', $request->email)->first();
        if($otp){
            if($otp->code==$request->otp)
            {
                if($otp->expire_at<=now()){
                    return response(['error' => 'OTP Is Expire']);
                }
                $user = User::where('email', $request->email)->first();
                otp::where('email', $request->email)->update(['expire_at' => now()]);
                $user->password = bcrypt($request->password);
                $user->save();
                return response(['success' => 'Password Reset Successfully']);
            }
            return response(['error' => 'OTP Is Wrong']);
        }
        return response(['error' => 'Enter Valid Email']);
    }
}
