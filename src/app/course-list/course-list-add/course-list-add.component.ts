import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'co-course-list-add',
  templateUrl: './course-list-add.component.html',
  styleUrls: ['./course-list-add.component.css']
})
export class CourseListAddComponent implements OnInit {
	@Input() show: boolean;
	
	constructor() { }

	ngOnInit() {
	
	}

	cancelAdd(){
		this.show = false;
	}

}
