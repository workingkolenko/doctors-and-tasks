import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { DoctorStore } from '../../doctor.store';
import { Doctor } from '../../doctor';
import { map, tap } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss']
})
export class DoctorEditComponent implements OnInit {

  // @Input() doctor$: Observable<Doctor[]> | any;
  doctor$: Observable<Doctor[]> | any;

  constructor(
    private doctorStore: DoctorStore,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDoctor();
    // console.log(this.doctor$)
  }

  goBack(): void {
    this.location.back();
  }

  getDoctor(): void {
    const doctorId: number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.doctor$ = this.doctorStore.getDoctorsObservable()
      .pipe(
        // tap(doctors => console.log(doctors)),
        // map(doctors => doctors.find(doctor => doctor.id == doctorId)),
        map(doctors => doctors.filter(doctor => doctor.id == doctorId)),
        tap(doctor => console.log(doctor)),
      );
  }

  onSave() {
    console.log("saved!");
    // update
    setTimeout(() => {
      this.location.back();
    }, 1000);
  }
}
