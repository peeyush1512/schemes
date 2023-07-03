import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent } from './statusof-c-sectionagainst-institutional-deliveryagainst-pela.component';

describe('StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent', () => {
  let component: StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent;
  let fixture: ComponentFixture<StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
