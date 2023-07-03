import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatBajarLatitudeAndLongitudeComponent } from './hat-bajar-latitude-and-longitude.component';

describe('HatBajarLatitudeAndLongitudeComponent', () => {
  let component: HatBajarLatitudeAndLongitudeComponent;
  let fixture: ComponentFixture<HatBajarLatitudeAndLongitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatBajarLatitudeAndLongitudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatBajarLatitudeAndLongitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
