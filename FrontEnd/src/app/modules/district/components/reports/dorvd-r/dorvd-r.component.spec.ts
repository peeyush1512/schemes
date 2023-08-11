import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorvdRComponent } from './dorvd-r.component';

describe('DorvdRComponent', () => {
  let component: DorvdRComponent;
  let fixture: ComponentFixture<DorvdRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorvdRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorvdRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
