import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryStatusTwoMonthsComponent } from './delivery-status-two-months.component';

describe('DeliveryStatusTwoMonthsComponent', () => {
  let component: DeliveryStatusTwoMonthsComponent;
  let fixture: ComponentFixture<DeliveryStatusTwoMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryStatusTwoMonthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryStatusTwoMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
