import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageofNotificationachievedagainstTargetComponent } from './percentageof-notificationachievedagainst-target.component';

describe('PercentageofNotificationachievedagainstTargetComponent', () => {
  let component: PercentageofNotificationachievedagainstTargetComponent;
  let fixture: ComponentFixture<PercentageofNotificationachievedagainstTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageofNotificationachievedagainstTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageofNotificationachievedagainstTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
