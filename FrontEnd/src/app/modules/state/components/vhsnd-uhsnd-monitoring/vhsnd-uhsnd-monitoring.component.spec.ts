import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VHSNDUHSNDMonitoringComponent } from './vhsnd-uhsnd-monitoring.component';

describe('VHSNDUHSNDMonitoringComponent', () => {
  let component: VHSNDUHSNDMonitoringComponent;
  let fixture: ComponentFixture<VHSNDUHSNDMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VHSNDUHSNDMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VHSNDUHSNDMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
