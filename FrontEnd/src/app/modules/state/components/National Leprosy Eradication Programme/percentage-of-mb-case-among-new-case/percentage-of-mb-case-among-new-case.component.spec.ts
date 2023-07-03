import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfMBCaseAmongNewCaseComponent } from './percentage-of-mb-case-among-new-case.component';

describe('PercentageOfMBCaseAmongNewCaseComponent', () => {
  let component: PercentageOfMBCaseAmongNewCaseComponent;
  let fixture: ComponentFixture<PercentageOfMBCaseAmongNewCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageOfMBCaseAmongNewCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageOfMBCaseAmongNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
