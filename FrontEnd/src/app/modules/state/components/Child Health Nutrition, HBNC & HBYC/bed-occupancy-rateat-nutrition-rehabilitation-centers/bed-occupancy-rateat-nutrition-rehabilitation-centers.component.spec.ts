import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedOccupancyRateatNutritionRehabilitationCentersComponent } from './bed-occupancy-rateat-nutrition-rehabilitation-centers.component';

describe('BedOccupancyRateatNutritionRehabilitationCentersComponent', () => {
  let component: BedOccupancyRateatNutritionRehabilitationCentersComponent;
  let fixture: ComponentFixture<BedOccupancyRateatNutritionRehabilitationCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedOccupancyRateatNutritionRehabilitationCentersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedOccupancyRateatNutritionRehabilitationCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
