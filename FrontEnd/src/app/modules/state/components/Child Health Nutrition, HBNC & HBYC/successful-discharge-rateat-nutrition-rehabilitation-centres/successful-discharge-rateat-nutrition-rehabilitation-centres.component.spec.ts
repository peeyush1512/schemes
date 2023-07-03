import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulDischargeRateatNutritionRehabilitationCentresComponent } from './successful-discharge-rateat-nutrition-rehabilitation-centres.component';

describe('SuccessfulDischargeRateatNutritionRehabilitationCentresComponent', () => {
  let component: SuccessfulDischargeRateatNutritionRehabilitationCentresComponent;
  let fixture: ComponentFixture<SuccessfulDischargeRateatNutritionRehabilitationCentresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulDischargeRateatNutritionRehabilitationCentresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulDischargeRateatNutritionRehabilitationCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
