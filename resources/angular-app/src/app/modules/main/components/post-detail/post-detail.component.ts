import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
  post:any;
  result:any;
  addPost = new Post(2,null,null);
  submitted = false;

  constructor( 
  	private route: ActivatedRoute,
  	private location: Location,
  	private postsService: PostsService,
  	private router: Router
  	) {  }

  ngOnInit() {
  	this.getPost();
  }
  onSubmit(){
  	this.submitted = true;
  }
  getPost():any {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.postsService.getPost(id)
  		.subscribe(post => this.post = post);
  		
  }
  newPost():any {
  	this.postsService.updatePost(this.post.id,this.post)
  		.subscribe(result => { 
  			if(result){
  				this.router.navigate(['posts']);
  		} 
  	});
  }
  onSubmitPost(){
	console.log(this.addPost)
	this.postsService.addPosts(this.addPost)
	.subscribe(result => { 
		if(result){
			this.router.navigate(['posts']);
		}});
  }
  
}
