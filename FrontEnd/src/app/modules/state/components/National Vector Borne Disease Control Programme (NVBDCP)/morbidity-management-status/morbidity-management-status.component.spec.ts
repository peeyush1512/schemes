import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorbidityManagementStatusComponent } from './morbidity-management-status.component';

describe('MorbidityManagementStatusComponent', () => {
  let component: MorbidityManagementStatusComponent;
  let fixture: ComponentFixture<MorbidityManagementStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorbidityManagementStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorbidityManagementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
