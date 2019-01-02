import { Component, OnInit } from '@angular/core';

import { Student } from '../../classes/student';
// import { STUDENTS } from '../../classes/mock-students';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
	
	// students = STUDENTS;
	students: Student[];
	// users: any[];
	selectedStudent: Student;
	
	constructor(private studentService: StudentService) { }

  	ngOnInit() {
  		this.getStudents();
  		// this.getUsers();
  	}
 //  	onSelect(student: Student): void {
	// 	this.selectedStudent = student;
	// }
	getStudents(): void {
		this.studentService.getStudents()
		.subscribe(students => this.students = students);
	}

	// getUsers(): void{
	// 	this.studentService.getUsers()
	// 		.subscribe(users => this.users = users);
	// }
}
