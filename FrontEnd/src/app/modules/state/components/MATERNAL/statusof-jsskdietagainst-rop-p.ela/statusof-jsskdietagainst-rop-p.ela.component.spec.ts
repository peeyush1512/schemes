import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofJSSKdietagainstROPPELAComponent } from './statusof-jsskdietagainst-rop-p.ela.component';

describe('StatusofJSSKdietagainstROPPELAComponent', () => {
  let component: StatusofJSSKdietagainstROPPELAComponent;
  let fixture: ComponentFixture<StatusofJSSKdietagainstROPPELAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofJSSKdietagainstROPPELAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofJSSKdietagainstROPPELAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
