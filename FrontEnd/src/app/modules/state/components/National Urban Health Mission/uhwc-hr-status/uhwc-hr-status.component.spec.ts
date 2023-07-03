import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UHWCHRStatusComponent } from './uhwc-hr-status.component';

describe('UHWCHRStatusComponent', () => {
  let component: UHWCHRStatusComponent;
  let fixture: ComponentFixture<UHWCHRStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UHWCHRStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UHWCHRStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
