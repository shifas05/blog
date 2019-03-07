//homecontroller
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PostsService;
use App\Post;
use App\User;
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
  
    public function index(Request $req)
    {

        $posts = Post::with('user')->orderBy('id','desc')->paginate(5);
        // dd($posts->all());
		// if($req->ajax()){
		// 	$view = view('data', compact('posts'))->render();
		// 	return response()->json(['html'=> $view]);
		// }

        // return view('home', compact('posts'));
        
        if($req->ajax()){
            return view('data', compact('posts'));
        }

        return view('home', compact('posts'));

        // $posts = $this->postService->getEveryPosts();
        // return $this->postService->getEveryPostByPagination($req);

        // dd($posts->all());
        // return view('home')->with('posts',$posts);
        // $user = Auth::id();
        // if($user){
            // return view('home-ajs');
        // }
    }
    public function addPost(){
        return view('add-post');
    }
}
