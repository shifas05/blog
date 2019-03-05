<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Http\Request;
use Auth;

class IndexController extends Controller
{
    public function angularLogin(){
        return view('login-check');
    }
    public function angularPostLogin(){
        $user = Auth::id();
        $user1 = Auth::user();
        $token = JWTAuth::fromUser($user1);
        return ['status'=>'1', 'token' => $token, 'user'=>$user];
    }


}
