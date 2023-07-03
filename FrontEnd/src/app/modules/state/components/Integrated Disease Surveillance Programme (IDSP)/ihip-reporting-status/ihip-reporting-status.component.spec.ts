import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IHIPReportingStatusComponent } from './ihip-reporting-status.component';

describe('IHIPReportingStatusComponent', () => {
  let component: IHIPReportingStatusComponent;
  let fixture: ComponentFixture<IHIPReportingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IHIPReportingStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IHIPReportingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
