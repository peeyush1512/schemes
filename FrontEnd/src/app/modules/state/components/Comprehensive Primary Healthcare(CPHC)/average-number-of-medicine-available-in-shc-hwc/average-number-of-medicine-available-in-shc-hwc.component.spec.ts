import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageNumberOfMedicineAvailableInSHCHWCComponent } from './average-number-of-medicine-available-in-shc-hwc.component';

describe('AverageNumberOfMedicineAvailableInSHCHWCComponent', () => {
  let component: AverageNumberOfMedicineAvailableInSHCHWCComponent;
  let fixture: ComponentFixture<AverageNumberOfMedicineAvailableInSHCHWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageNumberOfMedicineAvailableInSHCHWCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageNumberOfMedicineAvailableInSHCHWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
