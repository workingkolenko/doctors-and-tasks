import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctor';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-doctor-tasks',
  templateUrl: './doctor-tasks.component.html',
  styleUrls: ['./doctor-tasks.component.scss']
})

export class DoctorTasksComponent implements OnInit {

  @Input() doctor?: Doctor;

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }
}
