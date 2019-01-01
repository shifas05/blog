import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Student } from '../classes/student';
import { STUDENTS } from '../classes/mock-students'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
  	this.messageService.add('Student Service Fetched Messages');
  	return of(STUDENTS);
  }
}
