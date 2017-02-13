import { Injectable } from '@angular/core';

import { Course } from '../course';

@Injectable()
export class CoursesService {

	private courses: Course[] = [];

	constructor() {
		this.addCourses([new Course("Physics I","PH","1111",3.000,"Dr. Butters", "A 2012"), new Course("Physics II","PH","1121",3.000,"Dr. Butters", "B 2012"), new Course("Intermediate Mechanics I","PH","2201",3.000,"Professor Quimby", "A 2013")]);
	}

	getCourses(){
		return this.courses;
	}

	addCourses(newCourses: Course[]){
		Array.prototype.push.apply(this.courses, newCourses);
	}


}
