import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtovpComponent } from './atovp.component';

describe('AtovpComponent', () => {
  let component: AtovpComponent;
  let fixture: ComponentFixture<AtovpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtovpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtovpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
