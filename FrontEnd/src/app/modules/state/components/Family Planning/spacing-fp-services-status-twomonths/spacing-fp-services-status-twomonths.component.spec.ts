import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingFPServicesStatusTWOMONTHSComponent } from './spacing-fp-services-status-twomonths.component';

describe('SpacingFPServicesStatusTWOMONTHSComponent', () => {
  let component: SpacingFPServicesStatusTWOMONTHSComponent;
  let fixture: ComponentFixture<SpacingFPServicesStatusTWOMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacingFPServicesStatusTWOMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacingFPServicesStatusTWOMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
