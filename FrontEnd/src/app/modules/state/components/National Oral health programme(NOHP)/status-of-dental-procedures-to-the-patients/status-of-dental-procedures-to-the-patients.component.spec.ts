import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfDentalProceduresToThePatientsComponent } from './status-of-dental-procedures-to-the-patients.component';

describe('StatusOfDentalProceduresToThePatientsComponent', () => {
  let component: StatusOfDentalProceduresToThePatientsComponent;
  let fixture: ComponentFixture<StatusOfDentalProceduresToThePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfDentalProceduresToThePatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOfDentalProceduresToThePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
