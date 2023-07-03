import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingofHealthandwellnessambassadoSHWPComponent } from './trainingof-healthandwellnessambassado-shwp.component';

describe('TrainingofHealthandwellnessambassadoSHWPComponent', () => {
  let component: TrainingofHealthandwellnessambassadoSHWPComponent;
  let fixture: ComponentFixture<TrainingofHealthandwellnessambassadoSHWPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingofHealthandwellnessambassadoSHWPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingofHealthandwellnessambassadoSHWPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
