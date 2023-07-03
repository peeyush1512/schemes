import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofJSYpaymentagainstROPPELAComponent } from './statusof-jsypaymentagainst-roppela.component';

describe('StatusofJSYpaymentagainstROPPELAComponent', () => {
  let component: StatusofJSYpaymentagainstROPPELAComponent;
  let fixture: ComponentFixture<StatusofJSYpaymentagainstROPPELAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofJSYpaymentagainstROPPELAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofJSYpaymentagainstROPPELAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
