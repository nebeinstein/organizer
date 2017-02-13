import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DegreeComponent } from './degree/degree.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
	{ path: 'calendar', component: CalendarComponent },
	{ path: 'courses', component: CourseListComponent },
	{ path: 'degree', component: DegreeComponent },
	{ path: '', component: HomeComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);