import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageNumberOfDiagnosticsAvailableInPHCHWCComponent } from './average-number-of-diagnostics-available-in-phc-hwc.component';

describe('AverageNumberOfDiagnosticsAvailableInPHCHWCComponent', () => {
  let component: AverageNumberOfDiagnosticsAvailableInPHCHWCComponent;
  let fixture: ComponentFixture<AverageNumberOfDiagnosticsAvailableInPHCHWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageNumberOfDiagnosticsAvailableInPHCHWCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageNumberOfDiagnosticsAvailableInPHCHWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
