import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseViheiclesComponent } from './district-wise-viheicles.component';

describe('DistrictWiseViheiclesComponent', () => {
  let component: DistrictWiseViheiclesComponent;
  let fixture: ComponentFixture<DistrictWiseViheiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseViheiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseViheiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
