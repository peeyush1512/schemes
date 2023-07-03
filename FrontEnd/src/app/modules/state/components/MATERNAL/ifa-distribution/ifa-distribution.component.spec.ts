import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFADistributionComponent } from './ifa-distribution.component';

describe('IFADistributionComponent', () => {
  let component: IFADistributionComponent;
  let fixture: ComponentFixture<IFADistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IFADistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFADistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
