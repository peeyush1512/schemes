import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UHWCOperationalStatusComponent } from './uhwc-operational-status.component';

describe('UHWCOperationalStatusComponent', () => {
  let component: UHWCOperationalStatusComponent;
  let fixture: ComponentFixture<UHWCOperationalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UHWCOperationalStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UHWCOperationalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
