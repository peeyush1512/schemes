import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDStatusTwoMonthsComponent } from './opd-status-two-months.component';

describe('OPDStatusTwoMonthsComponent', () => {
  let component: OPDStatusTwoMonthsComponent;
  let fixture: ComponentFixture<OPDStatusTwoMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDStatusTwoMonthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDStatusTwoMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
