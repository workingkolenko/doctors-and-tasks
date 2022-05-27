import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Doctor } from "./doctor";

@Injectable({
    providedIn: 'root'
})
export class DoctorStore {

    private dataUrl = 'https://jsonplaceholder.typicode.com/users';

    private doctorsSubject = new BehaviorSubject<Doctor[]>([]);

    private doctors$: Observable<Doctor[]> = this.doctorsSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadAllDoctors();
    }

    getDoctorsObservable(): Observable<Doctor[]> {
        return this.doctors$;
    }

    private loadAllDoctors() {
        this.http.get<Doctor[]>(this.dataUrl)
            .pipe(
                tap(doctors => this.doctorsSubject.next(doctors))
            ).subscribe();
    }
}