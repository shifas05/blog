import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';

import get from "lodash/get";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {
  	identifier : '',
  	password : ''
  }

  constructor(
  	private jwtService : JwtService,
  	private router : Router
  	) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      this.jwtService.login(this.user.identifier, this.user.password)
            .subscribe(data => {
              this.router.navigate(['dashboard']);
            },err => {
          		console.log(err)
            })
    }
  }

}
