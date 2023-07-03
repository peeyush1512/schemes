import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodTransfusionServicesinStateFacilitiesComponent } from './blood-transfusion-servicesin-state-facilities.component';

describe('BloodTransfusionServicesinStateFacilitiesComponent', () => {
  let component: BloodTransfusionServicesinStateFacilitiesComponent;
  let fixture: ComponentFixture<BloodTransfusionServicesinStateFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodTransfusionServicesinStateFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodTransfusionServicesinStateFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
