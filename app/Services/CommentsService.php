<?php 

namespace App\CommentsService;
use App\Comment;

class CommentsService
{
	function __construct(Comment $comment)
	{
		$this->comment = $comment;
	}
	public function addComment()
	{

	}
}