import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Location } from '@angular/common';
// import { DoctorStore } from '../../doctor.store';
import { Doctor } from '../../doctor';
// import { map, tap } from "rxjs/operators";
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss']
})
export class DoctorEditComponent implements OnInit {

  @Input() doctor$ : Observable<Doctor[]> | any;

  constructor(
    // private doctorStore: DoctorStore,
    // private location: Location,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getDoctor();
  }

  // goBack(): void {
  //   this.location.back();
  // }

  // getDoctor(): void {
  //   const doctorId: number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   this.doctor$ = this.doctorStore.getDoctorsObservable()
  //     .pipe(
  //       map(doctors => doctors.filter(doctor => doctor.id == doctorId)),
  //       tap(response => console.log(response))
  //     );
  // }

  onSaveDoctor() {

  }

}
