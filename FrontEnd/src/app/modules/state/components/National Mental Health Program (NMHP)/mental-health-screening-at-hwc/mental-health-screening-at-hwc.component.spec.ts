import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MENTALHEALTHSCREENINGATHWCComponent } from './mental-health-screening-at-hwc.component';

describe('MENTALHEALTHSCREENINGATHWCComponent', () => {
  let component: MENTALHEALTHSCREENINGATHWCComponent;
  let fixture: ComponentFixture<MENTALHEALTHSCREENINGATHWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MENTALHEALTHSCREENINGATHWCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MENTALHEALTHSCREENINGATHWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
