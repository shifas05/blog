import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import get from 'lodash/get';
import { JwtHelperService } from '@auth0/angular-jwt';

import { API } from '../../../settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private http: HttpClient,
  	private jwtHelper: JwtHelperService
  	) { }

  authenticate(credentials){
  	return this.http.post(`${API.url}/auth/login`, credentials)
  						.pipe(
  							tap(data => {
  								localStorage.setItem('token',get(data,'data.token'))
  							})
  							)

  }

  check(){
  	const token = localStorage.getItem('token');
  	return !this.jwtHelper.isTokenExpired(token);
  }

  logout(){
  	localStorage.removeItem('token');
  	return true;
  }
}
