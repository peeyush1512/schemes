import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiometryFacilitiesComponent } from './audiometry-facilities.component';

describe('AudiometryFacilitiesComponent', () => {
  let component: AudiometryFacilitiesComponent;
  let fixture: ComponentFixture<AudiometryFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiometryFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiometryFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
