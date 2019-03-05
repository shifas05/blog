<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;
    // protected function attemptLogin(Request $request)
    // {
        // $id = str_replace("COMPANY","",$request->post('company_id'));
        // return Auth::attempt(
            // $this->credentials($request),
            // $request->filled('remember')
        // );
    // }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/login-check';
    
    public function logout(Request $request)
    {
        // $company_id=Auth::user()->company_id;
        $this->guard()->logout();

        $request->session()->invalidate();

        return redirect('/home');
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
