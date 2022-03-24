import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getTasks(id: number): Observable<Task[]> {
    const url = `${this.tasksURL}/${id}/todos`;
    return this.http.get<Task[]>(url);
  }
}
