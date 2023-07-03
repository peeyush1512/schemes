import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCCOPDTargetsPerMonthAnuallyComponent } from './tcc-opd-targets-per-month-anually.component';

describe('TCCOPDTargetsPerMonthAnuallyComponent', () => {
  let component: TCCOPDTargetsPerMonthAnuallyComponent;
  let fixture: ComponentFixture<TCCOPDTargetsPerMonthAnuallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TCCOPDTargetsPerMonthAnuallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCCOPDTargetsPerMonthAnuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
