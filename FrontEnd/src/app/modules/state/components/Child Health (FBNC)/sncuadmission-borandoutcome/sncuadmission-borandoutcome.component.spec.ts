import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNCUAdmissionBORANDOutcomeComponent } from './sncuadmission-borandoutcome.component';

describe('SNCUAdmissionBORANDOutcomeComponent', () => {
  let component: SNCUAdmissionBORANDOutcomeComponent;
  let fixture: ComponentFixture<SNCUAdmissionBORANDOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SNCUAdmissionBORANDOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNCUAdmissionBORANDOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
