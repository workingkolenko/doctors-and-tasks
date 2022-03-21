import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { DOCTORS } from './mock-doctors';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

  getDoctors(): Observable<Doctor[]> {
    const doctors = of(DOCTORS);
    return doctors;
  }
}
