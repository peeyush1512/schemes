import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrocelectomyStatusComponent } from './hydrocelectomy-status.component';

describe('HydrocelectomyStatusComponent', () => {
  let component: HydrocelectomyStatusComponent;
  let fixture: ComponentFixture<HydrocelectomyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrocelectomyStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrocelectomyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
