import { Component, Input, OnInit } from '@angular/core';

import { Course } from '../../course';

@Component({
  selector: 'co-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
	@Input() selectedCourse: Course;

	constructor() { }

	ngOnInit() {
	
	}

}
