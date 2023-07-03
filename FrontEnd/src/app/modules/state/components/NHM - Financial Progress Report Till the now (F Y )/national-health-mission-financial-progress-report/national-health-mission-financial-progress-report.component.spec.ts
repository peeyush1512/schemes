import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalHealthMissionFinancialProgressReportComponent } from './national-health-mission-financial-progress-report.component';

describe('NationalHealthMissionFinancialProgressReportComponent', () => {
  let component: NationalHealthMissionFinancialProgressReportComponent;
  let fixture: ComponentFixture<NationalHealthMissionFinancialProgressReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalHealthMissionFinancialProgressReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalHealthMissionFinancialProgressReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
