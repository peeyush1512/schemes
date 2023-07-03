import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobaccoFreeEducationalInstitutionTOFEIStatusComponent } from './tobacco-free-educational-institution-tofei-status.component';

describe('TobaccoFreeEducationalInstitutionTOFEIStatusComponent', () => {
  let component: TobaccoFreeEducationalInstitutionTOFEIStatusComponent;
  let fixture: ComponentFixture<TobaccoFreeEducationalInstitutionTOFEIStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobaccoFreeEducationalInstitutionTOFEIStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TobaccoFreeEducationalInstitutionTOFEIStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
