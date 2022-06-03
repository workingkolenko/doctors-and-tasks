import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorTasksComponent } from './doctor-tasks/doctor-tasks.component';  
import { DoctorEditComponent } from './doctors/doctor-edit/doctor-edit.component';

const routes: Routes = [
  { path: '', component: DoctorsComponent },
  { path: 'doctor/:id', component: DoctorTasksComponent },
  { path: 'doctor/:id/edit', component: DoctorEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
