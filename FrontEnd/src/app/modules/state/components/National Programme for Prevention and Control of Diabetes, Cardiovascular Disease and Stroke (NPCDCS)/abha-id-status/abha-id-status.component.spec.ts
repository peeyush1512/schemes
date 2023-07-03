import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABHAIDSTATUSComponent } from './abha-id-status.component';

describe('ABHAIDSTATUSComponent', () => {
  let component: ABHAIDSTATUSComponent;
  let fixture: ComponentFixture<ABHAIDSTATUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABHAIDSTATUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABHAIDSTATUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
