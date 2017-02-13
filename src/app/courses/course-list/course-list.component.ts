import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Course } from '../../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'co-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
	courses: Course[] = [];
	showNewCourse: boolean;
	@Output() courseSelected = new EventEmitter<Course>();

 	constructor(private cls: CoursesService) { }

	ngOnInit() {
		this.courses = this.cls.getCourses();
	}

	newCourse(){
		this.showNewCourse = true;
	}

	cancelAdd(){
		this.showNewCourse = false;
	}

	onSelected(passedCourse: Course){
		this.courseSelected.emit(passedCourse);
	}

}
