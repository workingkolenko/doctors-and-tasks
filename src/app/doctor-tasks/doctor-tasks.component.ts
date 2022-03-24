import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-doctor-tasks',
  templateUrl: './doctor-tasks.component.html',
  styleUrls: ['./doctor-tasks.component.scss'],
})
export class DoctorTasksComponent implements OnInit {
  tasks: Task[] = [];
  doctors: Doctor[] = [];

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
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.doctorService.getDoctors().subscribe((doctors) => (this.doctors = doctors));
  }

  getTasks(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.taskService.getTasks(id).subscribe(tasks => this.tasks = tasks);
  }

  goBack(): void {
    this.location.back();
  }
}
