import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { Doctor } from "./doctor";
import { Task } from "./task";

@Injectable({
    providedIn: 'root'
})
export class TaskStore {

    private dataUrl = 'https://jsonplaceholder.typicode.com/todos';

    private tasksSubject = new BehaviorSubject<Task[]>([]);

    private tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadAllTasks();
    }

    getTasksObservable(): Observable<Task[]> {
        return this.tasks$;
    }

    private loadAllTasks() {
        this.http.get<Task[]>(this.dataUrl)
            .pipe(
                tap(tasks => this.tasksSubject.next(tasks)),
                tap(response => console.log(response))
            ).subscribe();
    }
}