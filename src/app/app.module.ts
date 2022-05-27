import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorTasksComponent } from './doctor-tasks/doctor-tasks.component';
import { DoctorEditComponent } from './doctors/doctor-edit/doctor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorTasksComponent,
    DoctorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
