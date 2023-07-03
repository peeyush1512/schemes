import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradhanMantriNationalDialysisProgramPMNDPComponent } from './pradhan-mantri-national-dialysis-program-pmndp.component';

describe('PradhanMantriNationalDialysisProgramPMNDPComponent', () => {
  let component: PradhanMantriNationalDialysisProgramPMNDPComponent;
  let fixture: ComponentFixture<PradhanMantriNationalDialysisProgramPMNDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PradhanMantriNationalDialysisProgramPMNDPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PradhanMantriNationalDialysisProgramPMNDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
