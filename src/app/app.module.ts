import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DegreeComponent } from './degree/degree.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListService } from './course-list/course-list.service';

import { DropdownDirective } from './dropdown.directive';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DegreeComponent,
    CourseListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [CourseListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
