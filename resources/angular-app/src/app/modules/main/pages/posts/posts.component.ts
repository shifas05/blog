import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  	this.getPosts();
  }
  getPosts():any{
  	this.postsService.getPosts()
  		.subscribe( posts => this.posts = posts );
  }
  
}
