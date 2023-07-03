import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISTRICTHOSPITALMENTALHEALTHOPDComponent } from './district-hospital-mental-health-opd.component';

describe('DISTRICTHOSPITALMENTALHEALTHOPDComponent', () => {
  let component: DISTRICTHOSPITALMENTALHEALTHOPDComponent;
  let fixture: ComponentFixture<DISTRICTHOSPITALMENTALHEALTHOPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISTRICTHOSPITALMENTALHEALTHOPDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DISTRICTHOSPITALMENTALHEALTHOPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
