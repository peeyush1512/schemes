import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfCasesInvestigationsComponent } from './number-of-cases-investigations.component';

describe('NumberOfCasesInvestigationsComponent', () => {
  let component: NumberOfCasesInvestigationsComponent;
  let fixture: ComponentFixture<NumberOfCasesInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfCasesInvestigationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfCasesInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
