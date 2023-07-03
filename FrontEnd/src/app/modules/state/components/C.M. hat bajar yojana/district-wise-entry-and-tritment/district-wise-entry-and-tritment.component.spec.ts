import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseEntryAndTritmentComponent } from './district-wise-entry-and-tritment.component';

describe('DistrictWiseEntryAndTritmentComponent', () => {
  let component: DistrictWiseEntryAndTritmentComponent;
  let fixture: ComponentFixture<DistrictWiseEntryAndTritmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseEntryAndTritmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseEntryAndTritmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
