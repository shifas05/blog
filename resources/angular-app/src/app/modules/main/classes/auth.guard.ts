import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router , private jwtHelper : JwtHelperService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('access_token');
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return !this.jwtHelper.isTokenExpired(token);
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}