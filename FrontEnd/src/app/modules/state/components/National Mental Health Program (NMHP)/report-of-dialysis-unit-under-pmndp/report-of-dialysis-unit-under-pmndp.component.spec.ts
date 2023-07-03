import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOfDialysisUnitUnderPMNDPComponent } from './report-of-dialysis-unit-under-pmndp.component';

describe('ReportOfDialysisUnitUnderPMNDPComponent', () => {
  let component: ReportOfDialysisUnitUnderPMNDPComponent;
  let fixture: ComponentFixture<ReportOfDialysisUnitUnderPMNDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOfDialysisUnitUnderPMNDPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOfDialysisUnitUnderPMNDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
