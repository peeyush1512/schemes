import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofHRPreportingintheStateComponent } from './statusof-hrpreportinginthe-state.component';

describe('StatusofHRPreportingintheStateComponent', () => {
  let component: StatusofHRPreportingintheStateComponent;
  let fixture: ComponentFixture<StatusofHRPreportingintheStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofHRPreportingintheStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofHRPreportingintheStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
