import { Component, OnInit, Output } from '@angular/core';

import { Course } from '../course';
import { CourseListService } from './course-list.service';

@Component({
  selector: 'co-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
	courses: Course[] = [];
	showNewCourse: boolean;

 	constructor(private cls: CourseListService) { }

	ngOnInit() {
		this.courses = this.cls.getCourses();
	}

	newCourse(){
		this.showNewCourse = true;
	}

	cancelAdd(){
		this.showNewCourse = false;
	}

}
