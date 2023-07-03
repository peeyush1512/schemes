import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent } from './topdistrictswithmorethan100-hrpregisteredin-twomonths.component';

describe('Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent', () => {
  let component: Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent;
  let fixture: ComponentFixture<Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
