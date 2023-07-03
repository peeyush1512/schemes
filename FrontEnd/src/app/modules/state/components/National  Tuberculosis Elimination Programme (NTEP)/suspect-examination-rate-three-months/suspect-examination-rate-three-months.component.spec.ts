import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectExaminationRateTHREEMONTHSComponent } from './suspect-examination-rate-three-months.component';

describe('SuspectExaminationRateTHREEMONTHSComponent', () => {
  let component: SuspectExaminationRateTHREEMONTHSComponent;
  let fixture: ComponentFixture<SuspectExaminationRateTHREEMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspectExaminationRateTHREEMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspectExaminationRateTHREEMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
