import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseMarijoKiAverageComponent } from './district-wise-marijo-ki-average.component';

describe('DistrictWiseMarijoKiAverageComponent', () => {
  let component: DistrictWiseMarijoKiAverageComponent;
  let fixture: ComponentFixture<DistrictWiseMarijoKiAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseMarijoKiAverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseMarijoKiAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
