import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMNDPPortalEntryStatusDistrictWiseComponent } from './pmndp-portal-entry-status-district-wise.component';

describe('PMNDPPortalEntryStatusDistrictWiseComponent', () => {
  let component: PMNDPPortalEntryStatusDistrictWiseComponent;
  let fixture: ComponentFixture<PMNDPPortalEntryStatusDistrictWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMNDPPortalEntryStatusDistrictWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMNDPPortalEntryStatusDistrictWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
