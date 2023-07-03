import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRateOFYEARComponent } from './success-rate-of-year.component';

describe('SuccessRateOFYEARComponent', () => {
  let component: SuccessRateOFYEARComponent;
  let fixture: ComponentFixture<SuccessRateOFYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRateOFYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessRateOFYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
