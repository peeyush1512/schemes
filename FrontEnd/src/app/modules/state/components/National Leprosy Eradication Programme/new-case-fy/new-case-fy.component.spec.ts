import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaseFYComponent } from './new-case-fy.component';

describe('NewCaseFYComponent', () => {
  let component: NewCaseFYComponent;
  let fixture: ComponentFixture<NewCaseFYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCaseFYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCaseFYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
