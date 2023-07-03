import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIVTBCrossReferralComponent } from './hiv-tb-cross-referral.component';

describe('HIVTBCrossReferralComponent', () => {
  let component: HIVTBCrossReferralComponent;
  let fixture: ComponentFixture<HIVTBCrossReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HIVTBCrossReferralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HIVTBCrossReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
