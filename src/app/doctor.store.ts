import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Doctor } from "./doctor";

@Injectable({
    providedIn: 'root'
})
export class DoctorStore {

    private doctorURL = 'https://jsonplaceholder.typicode.com/users';

    private subject = new BehaviorSubject<Doctor[]>([]);

    doctors$: Observable<Doctor[]> = this.subject.asObservable();

    constructor(private http: HttpClient) {
        // this.loadAllDoctors();
    }

    private loadAllDoctors() {
        this.http.get<Doctor[]>(this.doctorURL)
            .pipe(
                map(response => response),
                tap(doctor => this.subject.next(doctor))
            )
    }

    showAll(): Observable<Doctor[]> {
        return this.doctors$;
    }
}