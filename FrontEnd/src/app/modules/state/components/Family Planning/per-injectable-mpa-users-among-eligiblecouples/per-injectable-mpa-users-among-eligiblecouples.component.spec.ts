import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PERInjectableMPAUsersAmongEligiblecouplesComponent } from './per-injectable-mpa-users-among-eligiblecouples.component';

describe('PERInjectableMPAUsersAmongEligiblecouplesComponent', () => {
  let component: PERInjectableMPAUsersAmongEligiblecouplesComponent;
  let fixture: ComponentFixture<PERInjectableMPAUsersAmongEligiblecouplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PERInjectableMPAUsersAmongEligiblecouplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PERInjectableMPAUsersAmongEligiblecouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
