import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfChildCaseAmongNewCaseComponent } from './percentage-of-child-case-among-new-case.component';

describe('PercentageOfChildCaseAmongNewCaseComponent', () => {
  let component: PercentageOfChildCaseAmongNewCaseComponent;
  let fixture: ComponentFixture<PercentageOfChildCaseAmongNewCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageOfChildCaseAmongNewCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageOfChildCaseAmongNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
