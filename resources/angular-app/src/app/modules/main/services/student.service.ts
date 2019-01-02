import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Student } from '../classes/student';
import { STUDENTS } from '../classes/mock-students'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(
  	private http: HttpClient,
  	private messageService: MessageService
  	) { }

  getStudents(): Observable<Student[]> {
  	this.messageService.add('Student Service Fetched Messages');
  	return of(STUDENTS);
  }

  getStudent(id: number): Observable<Student>{
  	this.messageService.add(`student fetched of id=${id}`);
  	return of(STUDENTS.find(student => student.id === id));
  }

  // getUsers(): Observable<any[]> {
  // 	return this.http.get<any[]>(this.userUrl)
  // }
}
