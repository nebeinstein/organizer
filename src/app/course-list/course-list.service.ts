import { Injectable } from '@angular/core';

import { Course } from '../course';

@Injectable()
export class CourseListService {

	private courses: Course[] = [];

	constructor() {
		this.addCourses([new Course("Physics I"), new Course("Physics II"), new Course("Intermediate Mechanics")]);
	}

	getCourses(){
		return this.courses;
	}

	addCourses(newCourses: Course[]){
		Array.prototype.push.apply(this.courses, newCourses);
	}


}
