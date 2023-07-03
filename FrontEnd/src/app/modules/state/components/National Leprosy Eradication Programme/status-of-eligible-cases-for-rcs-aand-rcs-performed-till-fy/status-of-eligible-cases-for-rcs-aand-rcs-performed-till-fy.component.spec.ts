import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent } from './status-of-eligible-cases-for-rcs-aand-rcs-performed-till-fy.component';

describe('StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent', () => {
  let component: StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent;
  let fixture: ComponentFixture<StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
