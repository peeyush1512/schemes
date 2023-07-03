import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent } from './coverageofin-schoolbeneficiariesunder-wifsprogramme.component';

describe('CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent', () => {
  let component: CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent;
  let fixture: ComponentFixture<CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
