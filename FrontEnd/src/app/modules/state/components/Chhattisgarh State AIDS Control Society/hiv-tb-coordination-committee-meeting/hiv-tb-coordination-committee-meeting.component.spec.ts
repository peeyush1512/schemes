import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIVTBCoordinationCommitteeMeetingComponent } from './hiv-tb-coordination-committee-meeting.component';

describe('HIVTBCoordinationCommitteeMeetingComponent', () => {
  let component: HIVTBCoordinationCommitteeMeetingComponent;
  let fixture: ComponentFixture<HIVTBCoordinationCommitteeMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HIVTBCoordinationCommitteeMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HIVTBCoordinationCommitteeMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
