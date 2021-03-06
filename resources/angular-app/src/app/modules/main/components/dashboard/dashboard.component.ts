import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
   this.getStudents();
  }

  getStudents(): void{
  	this.studentService.getStudents()
  		.subscribe( students => this.students = students.slice(1,5));
     console.log(this.students)
  }

}
