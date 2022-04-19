import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private doctorURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorURL);
  }
}
