import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataractBacklogFreeDistrictYearComponent } from './cataract-backlog-free-district-year.component';

describe('CataractBacklogFreeDistrictYearComponent', () => {
  let component: CataractBacklogFreeDistrictYearComponent;
  let fixture: ComponentFixture<CataractBacklogFreeDistrictYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataractBacklogFreeDistrictYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataractBacklogFreeDistrictYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
