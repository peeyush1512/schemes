import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent } from './status-of-dialysis-unit-in-other-source-dmf-csr-jds.component';

describe('StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent', () => {
  let component: StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent;
  let fixture: ComponentFixture<StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
