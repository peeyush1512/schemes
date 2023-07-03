import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateScenarioBloodCollectionComponent } from './state-scenario-blood-collection.component';

describe('StateScenarioBloodCollectionComponent', () => {
  let component: StateScenarioBloodCollectionComponent;
  let fixture: ComponentFixture<StateScenarioBloodCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateScenarioBloodCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateScenarioBloodCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
