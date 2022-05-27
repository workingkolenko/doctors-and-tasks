import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../task';
import { Observable } from 'rxjs';
import { TaskStore } from '../task.store';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-doctor-tasks',
  templateUrl: './doctor-tasks.component.html',
  styleUrls: ['./doctor-tasks.component.scss'],
})
export class DoctorTasksComponent implements OnInit {;
  tasks$: Observable<Task[]> | undefined;

  constructor(
    private taskStore: TaskStore,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    const doctorId: number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.tasks$ = this.taskStore.getTasksObservable()
    .pipe(
      map(tasks => tasks.filter(task => task.userId == doctorId))
    );
  }

  goBack(): void {
    this.location.back();
  }
}
