import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionStatusOfTBPatientsByNikshayMitraComponent } from './adoption-status-of-tb-patients-by-nikshay-mitra.component';

describe('AdoptionStatusOfTBPatientsByNikshayMitraComponent', () => {
  let component: AdoptionStatusOfTBPatientsByNikshayMitraComponent;
  let fixture: ComponentFixture<AdoptionStatusOfTBPatientsByNikshayMitraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionStatusOfTBPatientsByNikshayMitraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionStatusOfTBPatientsByNikshayMitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
