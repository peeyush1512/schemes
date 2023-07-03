import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent } from './nmhp-district-hospital-ipd-daycare-facility.component';

describe('NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent', () => {
  let component: NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent;
  let fixture: ComponentFixture<NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
