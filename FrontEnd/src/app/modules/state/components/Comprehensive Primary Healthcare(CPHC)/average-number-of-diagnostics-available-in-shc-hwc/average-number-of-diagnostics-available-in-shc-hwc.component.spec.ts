import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageNumberOfDiagnosticsAvailableInSHCHWCComponent } from './average-number-of-diagnostics-available-in-shc-hwc.component';

describe('AverageNumberOfDiagnosticsAvailableInSHCHWCComponent', () => {
  let component: AverageNumberOfDiagnosticsAvailableInSHCHWCComponent;
  let fixture: ComponentFixture<AverageNumberOfDiagnosticsAvailableInSHCHWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageNumberOfDiagnosticsAvailableInSHCHWCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageNumberOfDiagnosticsAvailableInSHCHWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
