import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentOfSevereAnemiaAgainstDetectedComponent } from './treatment-of-severe-anemia-against-detected.component';

describe('TreatmentOfSevereAnemiaAgainstDetectedComponent', () => {
  let component: TreatmentOfSevereAnemiaAgainstDetectedComponent;
  let fixture: ComponentFixture<TreatmentOfSevereAnemiaAgainstDetectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentOfSevereAnemiaAgainstDetectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentOfSevereAnemiaAgainstDetectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
