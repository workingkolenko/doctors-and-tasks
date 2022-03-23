import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Doctor } from '../doctor'
import { Task } from '../task'
import { TaskService } from '../task.service'

@Component({
  selector: 'app-doctor-tasks',
  templateUrl: './doctor-tasks.component.html',
  styleUrls: ['./doctor-tasks.component.scss'],
})
export class DoctorTasksComponent implements OnInit {
  @Input() doctor?: Doctor

  tasks: Task[] = []

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }

  // getTasks(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'))
  //   this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  // }
}
