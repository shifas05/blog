import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../../../settings';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
  	return this.http.get<any[]>(`${API.url}/get-posts`);
  }
  getPost(id: number): Observable<any>{
  	return this.http.get<any>(`${API.url}/get-post/`+id);
  }
}
