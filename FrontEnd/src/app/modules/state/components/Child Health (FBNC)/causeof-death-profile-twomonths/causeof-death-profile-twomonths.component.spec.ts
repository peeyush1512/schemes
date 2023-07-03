import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseofDeathProfileTWOMONTHSComponent } from './causeof-death-profile-twomonths.component';

describe('CauseofDeathProfileTWOMONTHSComponent', () => {
  let component: CauseofDeathProfileTWOMONTHSComponent;
  let fixture: ComponentFixture<CauseofDeathProfileTWOMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauseofDeathProfileTWOMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauseofDeathProfileTWOMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
