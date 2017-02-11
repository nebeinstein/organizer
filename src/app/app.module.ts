import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { DegreeComponent } from './degree/degree.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListService } from './course-list/course-list.service';
import { CourseListAddComponent } from './course-list/course-list-add/course-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    DegreeComponent,
    CourseListComponent,
    CourseListAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
