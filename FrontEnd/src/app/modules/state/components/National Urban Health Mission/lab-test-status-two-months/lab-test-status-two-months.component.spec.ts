import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestStatusTwoMonthsComponent } from './lab-test-status-two-months.component';

describe('LabTestStatusTwoMonthsComponent', () => {
  let component: LabTestStatusTwoMonthsComponent;
  let fixture: ComponentFixture<LabTestStatusTwoMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTestStatusTwoMonthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTestStatusTwoMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
