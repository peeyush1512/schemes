import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent } from './districtadvisorycommitteemeetingineverytwomonths.component';

describe('DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent', () => {
  let component: DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent;
  let fixture: ComponentFixture<DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
