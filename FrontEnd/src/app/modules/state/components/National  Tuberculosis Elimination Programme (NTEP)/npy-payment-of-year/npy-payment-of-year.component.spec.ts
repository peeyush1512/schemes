import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPYPaymentOFYEARComponent } from './npy-payment-of-year.component';

describe('NPYPaymentOFYEARComponent', () => {
  let component: NPYPaymentOFYEARComponent;
  let fixture: ComponentFixture<NPYPaymentOFYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPYPaymentOFYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NPYPaymentOFYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
