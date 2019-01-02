import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user;
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private userService: UserService
  	) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser():void{
  	const id  = +this.route.snapshot.paramMap.get('id');
  	this.userService.getUser(id)
  		.subscribe(user => this.user = user);
  		// console.log(this.user);
  }

  goBack(){
  	this.location.back();
  }



}
