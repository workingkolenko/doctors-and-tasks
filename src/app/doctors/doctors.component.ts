import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {

  doctors$: Observable<Doctor[]> | any;

  constructor(
    private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctors$ = this.doctorService.getDoctors();
  }
}
