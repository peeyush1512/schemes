import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofANCVsInstitutionalDeliveryComponent } from './statusof-ancvs-institutional-delivery.component';

describe('StatusofANCVsInstitutionalDeliveryComponent', () => {
  let component: StatusofANCVsInstitutionalDeliveryComponent;
  let fixture: ComponentFixture<StatusofANCVsInstitutionalDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofANCVsInstitutionalDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofANCVsInstitutionalDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
