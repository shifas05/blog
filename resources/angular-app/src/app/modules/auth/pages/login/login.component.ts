// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../../shared/services/auth.service';
// import { ToastrService } from 'ngx-toastr';
// import { Router } from '@angular/router';

// import get from "lodash/get";

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent implements OnInit {

//   user = {
//     identifier:'',
//     password:''
//   }
  
//   constructor(
//     private authService:AuthService,
//     private toastr: ToastrService,
//     public router:Router
//     ) { }

//   ngOnInit() {
//   }

//   onSubmit(form) {
//     if (form.valid) {
//       this.authService.authenticate(this.user)
//             .subscribe(data => {
//               // this.router.navigate(['main/dashboard']);
//             },err => {
//               err.status !== 500 && this.toastr.error(get(err,'error.message','Service unavailable'),null,{
//                 positionClass:'toast-top-center',
//               })
//             })
//     }
//   }

// }
