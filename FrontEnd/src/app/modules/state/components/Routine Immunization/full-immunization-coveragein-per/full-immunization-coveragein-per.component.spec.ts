import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImmunizationCoverageinPERComponent } from './full-immunization-coveragein-per.component';

describe('FullImmunizationCoverageinPERComponent', () => {
  let component: FullImmunizationCoverageinPERComponent;
  let fixture: ComponentFixture<FullImmunizationCoverageinPERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullImmunizationCoverageinPERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullImmunizationCoverageinPERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
