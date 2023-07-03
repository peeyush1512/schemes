import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NATIONALORALHEALTHStatusOfOPDToThePatientComponent } from './national-oral-health-status-of-opd-to-the-patient.component';

describe('NATIONALORALHEALTHStatusOfOPDToThePatientComponent', () => {
  let component: NATIONALORALHEALTHStatusOfOPDToThePatientComponent;
  let fixture: ComponentFixture<NATIONALORALHEALTHStatusOfOPDToThePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NATIONALORALHEALTHStatusOfOPDToThePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NATIONALORALHEALTHStatusOfOPDToThePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
