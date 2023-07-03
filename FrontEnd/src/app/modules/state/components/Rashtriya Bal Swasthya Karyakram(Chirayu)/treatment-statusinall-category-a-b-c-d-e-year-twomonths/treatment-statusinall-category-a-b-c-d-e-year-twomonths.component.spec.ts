import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent } from './treatment-statusinall-category-a-b-c-d-e-year-twomonths.component';

describe('TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent', () => {
  let component: TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent;
  let fixture: ComponentFixture<TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
