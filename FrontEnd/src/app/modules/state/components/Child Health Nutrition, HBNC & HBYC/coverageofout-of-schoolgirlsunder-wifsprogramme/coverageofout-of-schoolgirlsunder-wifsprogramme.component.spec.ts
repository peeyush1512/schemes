import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent } from './coverageofout-of-schoolgirlsunder-wifsprogramme.component';

describe('CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent', () => {
  let component: CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent;
  let fixture: ComponentFixture<CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
