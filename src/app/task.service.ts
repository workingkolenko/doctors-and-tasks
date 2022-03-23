import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksURL = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksURL)
  }
}
