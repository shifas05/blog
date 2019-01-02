import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:any[];
  private url = "https://jsonplaceholder.typicode.com/users";
  private urlOne = "https://jsonplaceholder.typicode.com/users/1";
  constructor(
  	private http: HttpClient
  	) { }

  getUsers(): Observable<any[]> {
  	return this.http.get<any[]>(this.url);
  }

  getUser(id: number): Observable<any>{
  	return this.http.get<any>(this.url+'/'+id);
  }
  
}
