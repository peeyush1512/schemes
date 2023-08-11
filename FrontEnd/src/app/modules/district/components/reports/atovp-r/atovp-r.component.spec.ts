import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtovpRComponent } from './atovp-r.component';

describe('AtovpRComponent', () => {
  let component: AtovpRComponent;
  let fixture: ComponentFixture<AtovpRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtovpRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtovpRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
