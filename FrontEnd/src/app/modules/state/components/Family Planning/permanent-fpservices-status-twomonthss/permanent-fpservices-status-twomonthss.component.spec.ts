import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentFPServicesStatusTWOMONTHSSComponent } from './permanent-fpservices-status-twomonthss.component';

describe('PermanentFPServicesStatusTWOMONTHSSComponent', () => {
  let component: PermanentFPServicesStatusTWOMONTHSSComponent;
  let fixture: ComponentFixture<PermanentFPServicesStatusTWOMONTHSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentFPServicesStatusTWOMONTHSSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentFPServicesStatusTWOMONTHSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
