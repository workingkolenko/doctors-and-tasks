import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { BehaviorSubject } from 'rxjs';
import { DoctorStore } from '../doctor.store';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {

  doctors$: Observable<Doctor[]> | any;

  constructor(
    private doctorStore: DoctorStore,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctors$ = this.doctorStore.getDoctors();
  }
}
