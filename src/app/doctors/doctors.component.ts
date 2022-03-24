import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctorService
      .getDoctors()
      .subscribe((doctors) => (this.doctors = doctors));
  }
}
