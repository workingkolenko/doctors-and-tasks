import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTasksComponent } from './doctor-tasks.component';

describe('DoctorTasksComponent', () => {
  let component: DoctorTasksComponent;
  let fixture: ComponentFixture<DoctorTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
