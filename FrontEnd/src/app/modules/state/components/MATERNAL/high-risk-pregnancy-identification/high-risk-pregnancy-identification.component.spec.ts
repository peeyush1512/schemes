import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiskPregnancyIdentificationComponent } from './high-risk-pregnancy-identification.component';

describe('HighRiskPregnancyIdentificationComponent', () => {
  let component: HighRiskPregnancyIdentificationComponent;
  let fixture: ComponentFixture<HighRiskPregnancyIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighRiskPregnancyIdentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighRiskPregnancyIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
