import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { CoursesComponent } from './courses/courses.component';
import { DegreeComponent } from './degree/degree.component';
import { HomeComponent } from './home/home.component';
import { ProfessorListComponent} from './professor-list/professor-list.component';


const APP_ROUTES: Routes = [
	{ path: 'calendar', component: CalendarComponent },
	{ path: 'professors', component: ProfessorListComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: 'degree', component: DegreeComponent },
	{ path: '', component: HomeComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);