import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  selectedDoctor?: Doctor;

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  onSelect(doctor: Doctor): void {
    this.selectedDoctor = doctor;
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
        .subscribe(doctors => this.doctors = doctors);
  }
}
