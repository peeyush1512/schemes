import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfInstitutionalDeliveryAgainstPELAComponent } from './status-of-institutional-delivery-against-pela.component';

describe('StatusOfInstitutionalDeliveryAgainstPELAComponent', () => {
  let component: StatusOfInstitutionalDeliveryAgainstPELAComponent;
  let fixture: ComponentFixture<StatusOfInstitutionalDeliveryAgainstPELAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfInstitutionalDeliveryAgainstPELAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOfInstitutionalDeliveryAgainstPELAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
