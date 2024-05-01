<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Traits\AuthValidation;
use App\Models\User;
use App\Notifications\send;
use App\Notifications\sendOtp;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    use AuthValidation;

    public function __construct(){
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    public function login(Request $request){
        $validator = $this->loginValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);
        $check=$this->checkNotVerification($request->email);
        if ($check=='true'){
            if($token = auth()->attempt($validator->validated()))
                return $this->createToken($token);
            return response(['error' => $this->checkError($request->all())]);
        }
        return response(['error' => 'Email Not Verified Yet']);


    }

    public function register(Request $request){

        $validator = $this->registerValidation($request->all());
        if($validator->fails())
            return response(['error' => $validator->errors()]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $user->notify(new send());

        return response(['message' => 'Successfully Registeration']);
    }

    public function logout(){
        auth()->logout();
        return response(['message' => 'Signed out']);
    }

    private function createToken($token){
        return response([
            'token' => $token,
        ]);
    }


    public function profile(){
        $user_id=auth()->id();
        $user=User::find($user_id);
        return response($user);
    }
}
