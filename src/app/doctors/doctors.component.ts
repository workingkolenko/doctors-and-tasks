import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorStore } from '../doctor.store';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {

  doctors$: Observable<Doctor[]> | undefined;

  constructor(
    private doctorStore: DoctorStore
  ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctors$ = this.doctorStore.getDoctorsObservable();
  }
}
