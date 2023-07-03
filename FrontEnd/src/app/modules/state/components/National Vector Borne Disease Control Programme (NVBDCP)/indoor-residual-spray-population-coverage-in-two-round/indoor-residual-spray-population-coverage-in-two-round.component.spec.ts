import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorResidualSprayPopulationCoverageInTWORoundComponent } from './indoor-residual-spray-population-coverage-in-two-round.component';

describe('IndoorResidualSprayPopulationCoverageInTWORoundComponent', () => {
  let component: IndoorResidualSprayPopulationCoverageInTWORoundComponent;
  let fixture: ComponentFixture<IndoorResidualSprayPopulationCoverageInTWORoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorResidualSprayPopulationCoverageInTWORoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorResidualSprayPopulationCoverageInTWORoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
