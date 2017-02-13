import { Routes, RouterModule } from '@angular/router';

import { DegreeComponent } from './degree/degree.component';
import { CourseListComponent } from './course-list/course-list.component';

const APP_ROUTES: Routes = [
	{ path: 'calendar', component: CalendarComponent },
	{ path: 'courses', component: CourseListComponent },
	{ path: 'degree', component: DegreeComponent },
	{ path: '', component: DegreeComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);