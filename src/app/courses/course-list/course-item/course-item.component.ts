import { Component, Input, OnInit } from '@angular/core';

import { Course } from '../../../course';

@Component({
  selector: 'co-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
	@Input() course: Course;
	courseId: number;

	constructor() { }

	ngOnInit() {
	
	}

}
