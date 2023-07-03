import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCHWingComponent } from './mchwing.component';

describe('MCHWingComponent', () => {
  let component: MCHWingComponent;
  let fixture: ComponentFixture<MCHWingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCHWingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCHWingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
