import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHCANDPHCMENTALHEALTHOPDComponent } from './chc-and-phc-mental-health-opd.component';

describe('CHCANDPHCMENTALHEALTHOPDComponent', () => {
  let component: CHCANDPHCMENTALHEALTHOPDComponent;
  let fixture: ComponentFixture<CHCANDPHCMENTALHEALTHOPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHCANDPHCMENTALHEALTHOPDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHCANDPHCMENTALHEALTHOPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
