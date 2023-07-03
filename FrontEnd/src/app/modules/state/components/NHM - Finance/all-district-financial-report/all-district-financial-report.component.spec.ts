import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDistrictFinancialReportComponent } from './all-district-financial-report.component';

describe('AllDistrictFinancialReportComponent', () => {
  let component: AllDistrictFinancialReportComponent;
  let fixture: ComponentFixture<AllDistrictFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDistrictFinancialReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDistrictFinancialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
