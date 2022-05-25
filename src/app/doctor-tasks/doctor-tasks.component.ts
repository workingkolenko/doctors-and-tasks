import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-tasks',
  templateUrl: './doctor-tasks.component.html',
  styleUrls: ['./doctor-tasks.component.scss'],
})
export class DoctorTasksComponent implements OnInit {
  doctors$: Observable<Doctor[]> | undefined;
  tasks$: Observable<Task[]> | undefined;

  constructor(
    private taskService: TaskService,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTasks();
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctors$ = this.doctorService.getAllDoctors();
  }

  getTasks(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.tasks$ = this.taskService.getTasks(id);
  }

  goBack(): void {
    this.location.back();
  }
}
