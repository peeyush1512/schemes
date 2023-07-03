import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWReceivedTSZCalciumTabletComponent } from './pw-received-tsz-calcium-tablet.component';

describe('PWReceivedTSZCalciumTabletComponent', () => {
  let component: PWReceivedTSZCalciumTabletComponent;
  let fixture: ComponentFixture<PWReceivedTSZCalciumTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PWReceivedTSZCalciumTabletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PWReceivedTSZCalciumTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
