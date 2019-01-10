import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';
// import { Toa } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import get from "lodash/get";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = null;
  user = {
  	identifier : '',
  	password : ''
  }
  loading = false;

  constructor(
  	private jwtService : JwtService,
  	private router : Router,
    private toastr : ToastrService
  	) { }

  ngOnInit() {
    setTimeout(() => this.showSuccess(),1000)
  }

  onSubmit(form) {

    if (form.valid) {
      this.showSuccess()
      this.loading = true;
      this.jwtService.login(this.user.identifier, this.user.password)
            .subscribe(data => {
              this.router.navigate(['dashboard']);
            },error => {
          		this.error = error.error;
             this.toastr.error(get(error,'asdsad','Service unavailable'),null,{
                positionClass:'toast-top-center',
              })
              this.loading = false; 
             
            })
    }
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  toast() {
    console.log('dasd')
    // setTimeout(() => this.toastr.info('adaasdads'),2000)
    this.toastr.success('adaasdads')
  }

 

}
