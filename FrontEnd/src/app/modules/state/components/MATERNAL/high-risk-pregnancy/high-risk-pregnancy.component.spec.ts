import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiskPregnancyComponent } from './high-risk-pregnancy.component';

describe('HighRiskPregnancyComponent', () => {
  let component: HighRiskPregnancyComponent;
  let fixture: ComponentFixture<HighRiskPregnancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighRiskPregnancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighRiskPregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
