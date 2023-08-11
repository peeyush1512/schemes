import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsbcComponent } from './ssbc.component';

describe('SsbcComponent', () => {
  let component: SsbcComponent;
  let fixture: ComponentFixture<SsbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsbcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
