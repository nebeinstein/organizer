import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DegreeComponent } from './degree/degree.component';
import { CourseListComponent } from './courses/course-list/course-list.component';

import { CoursesService } from './courses/courses.service';

import { DropdownDirective } from './dropdown.directive';

import { Routing } from './app.routing';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DegreeComponent,
    CourseListComponent,
    DropdownDirective,
    CalendarComponent,
    HomeComponent,
    ProfessorListComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
