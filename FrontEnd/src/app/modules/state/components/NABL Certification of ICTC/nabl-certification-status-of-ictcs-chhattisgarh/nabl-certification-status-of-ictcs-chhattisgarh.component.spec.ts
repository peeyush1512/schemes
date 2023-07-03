import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NABLCertificationStatusOfICTCsChhattisgarhComponent } from './nabl-certification-status-of-ictcs-chhattisgarh.component';

describe('NABLCertificationStatusOfICTCsChhattisgarhComponent', () => {
  let component: NABLCertificationStatusOfICTCsChhattisgarhComponent;
  let fixture: ComponentFixture<NABLCertificationStatusOfICTCsChhattisgarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NABLCertificationStatusOfICTCsChhattisgarhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NABLCertificationStatusOfICTCsChhattisgarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
