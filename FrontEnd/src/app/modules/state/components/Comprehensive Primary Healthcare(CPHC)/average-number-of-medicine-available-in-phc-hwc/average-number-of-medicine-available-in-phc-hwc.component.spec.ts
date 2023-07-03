import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageNumberOfMedicineAvailableInPHCHWCComponent } from './average-number-of-medicine-available-in-phc-hwc.component';

describe('AverageNumberOfMedicineAvailableInPHCHWCComponent', () => {
  let component: AverageNumberOfMedicineAvailableInPHCHWCComponent;
  let fixture: ComponentFixture<AverageNumberOfMedicineAvailableInPHCHWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageNumberOfMedicineAvailableInPHCHWCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageNumberOfMedicineAvailableInPHCHWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
