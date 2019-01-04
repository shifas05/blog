<?php 

namespace App\Services;
use App\Post;
use App\User;
use Auth;

class PostsService
{
	function __construct(Post $post, User $user)
	{
		$this->post = $post;
		$this->user = $user;
	}
	public function addPost($data)
	{
		$user = $this->user->user();
		return Post::create(['user_id'=>$user,
							'title' => $data['blog_title'],
							'post' => $data['blog_post']]);
	}
	public function getEveryPosts()
	{
		return $this->post->orderBy('id','desc')->with('user')->get();
	}
	public function getPost($id)
	{
		return $this->post->find($id);
	}
	public function updatePost($data,$id)
	{
		// return $data;
		// echo print_r($data);
		$post = $this->post->find($data['id']);
		$post->title = $data['title'];
		$post->post = $data['post'];
		$result = $post->save();
		return  response()->json("success");
	}
	public function addPostFront($data)
	{
		// return $data;
		$this->post->user_id = "2";
		$this->post->post = $data['post'];
		$this->post->title = $data['title'];
		if($this->post->save())
		{
			return response()->json("success");
		}
	}
}