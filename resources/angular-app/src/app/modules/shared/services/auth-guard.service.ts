// import { Injectable } from '@angular/core';
// import { Router, CanActivate, CanActivateChild } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate,CanActivateChild {

//   constructor(private authService:AuthService,public router: Router) { }

//   canActivate(): boolean{
//   	return this.authCheck();
//   }

//   canActivateChild(): boolean{
//   	return this.authCheck();
//   }

//   authCheck(): boolean{
//   	if(!this.authService.check()){
//   		this.router.navigate(['login']);
//   		return false;
//   	}
//   	return true;
//   }

// }
