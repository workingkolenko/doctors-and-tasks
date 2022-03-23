import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorTasksComponent } from './doctor-tasks/doctor-tasks.component';  

const routes: Routes = [
  { path: '', component: DoctorsComponent },
  { path: 'tasks/:id', component: DoctorTasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
