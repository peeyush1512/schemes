import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsbcRComponent } from './ssbc-r.component';

describe('SsbcRComponent', () => {
  let component: SsbcRComponent;
  let fixture: ComponentFixture<SsbcRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsbcRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsbcRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
