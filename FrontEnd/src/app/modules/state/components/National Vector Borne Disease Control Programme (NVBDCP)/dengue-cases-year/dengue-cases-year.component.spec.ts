import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueCasesYEARComponent } from './dengue-cases-year.component';

describe('DengueCasesYEARComponent', () => {
  let component: DengueCasesYEARComponent;
  let fixture: ComponentFixture<DengueCasesYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DengueCasesYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DengueCasesYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
