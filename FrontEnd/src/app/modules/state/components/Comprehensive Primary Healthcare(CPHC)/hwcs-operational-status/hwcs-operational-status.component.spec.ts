import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HWCsOperationalStatusComponent } from './hwcs-operational-status.component';

describe('HWCsOperationalStatusComponent', () => {
  let component: HWCsOperationalStatusComponent;
  let fixture: ComponentFixture<HWCsOperationalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HWCsOperationalStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HWCsOperationalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
