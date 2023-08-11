import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorvdComponent } from './dorvd.component';

describe('DorvdComponent', () => {
  let component: DorvdComponent;
  let fixture: ComponentFixture<DorvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorvdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
