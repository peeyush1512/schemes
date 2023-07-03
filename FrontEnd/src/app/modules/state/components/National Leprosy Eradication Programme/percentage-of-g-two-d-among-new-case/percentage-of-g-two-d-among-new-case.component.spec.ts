import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfGTWODAmongNewCaseComponent } from './percentage-of-g-two-d-among-new-case.component';

describe('PercentageOfGTWODAmongNewCaseComponent', () => {
  let component: PercentageOfGTWODAmongNewCaseComponent;
  let fixture: ComponentFixture<PercentageOfGTWODAmongNewCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageOfGTWODAmongNewCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageOfGTWODAmongNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
