import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorStore } from '../doctor.store';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {

  doctors$: Observable<Doctor[]> | any;

  constructor(
    private doctorStore: DoctorStore
  ) { }

  ngOnInit(): void {
    this.getDoctors();
    console.log(this.doctors$)
  }

  getDoctors(): void {
    this.doctors$ = this.doctorStore.showAll();
  }
}
