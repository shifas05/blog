import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:any;
  constructor( 
  	private route: ActivatedRoute,
  	private location: Location,
  	private postsService: PostsService
  	) { }

  ngOnInit() {
  	this.getPost();
  }

  getPost():void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.postsService.getPost(id)
  		.subscribe(post => this.post = post);
  }


}
