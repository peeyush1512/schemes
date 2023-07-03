import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEyeScreeningProvidedFreeGlassesComponent } from './school-eye-screening-provided-free-glasses.component';

describe('SchoolEyeScreeningProvidedFreeGlassesComponent', () => {
  let component: SchoolEyeScreeningProvidedFreeGlassesComponent;
  let fixture: ComponentFixture<SchoolEyeScreeningProvidedFreeGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolEyeScreeningProvidedFreeGlassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolEyeScreeningProvidedFreeGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
