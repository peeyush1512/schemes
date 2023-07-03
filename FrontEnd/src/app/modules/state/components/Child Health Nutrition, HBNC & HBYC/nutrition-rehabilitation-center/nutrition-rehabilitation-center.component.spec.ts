import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionRehabilitationCenterComponent } from './nutrition-rehabilitation-center.component';

describe('NutritionRehabilitationCenterComponent', () => {
  let component: NutritionRehabilitationCenterComponent;
  let fixture: ComponentFixture<NutritionRehabilitationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionRehabilitationCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionRehabilitationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
