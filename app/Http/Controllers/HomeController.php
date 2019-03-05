<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PostsService;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PostsService $postService)
    {
        $this->postService = $postService;
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
  
    public function index()
    {
        $posts = $this->postService->getEveryPosts();
        // dd($posts->all());
        // return view('home')->with('posts',$posts);
        $user = Auth::id();
        if($user){
            return view('home-ajs');
        }
    }
}
