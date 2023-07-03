import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseLFUAndViralLoadPendencyComponent } from './district-wise-lfu-and-viral-load-pendency.component';

describe('DistrictWiseLFUAndViralLoadPendencyComponent', () => {
  let component: DistrictWiseLFUAndViralLoadPendencyComponent;
  let fixture: ComponentFixture<DistrictWiseLFUAndViralLoadPendencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseLFUAndViralLoadPendencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseLFUAndViralLoadPendencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
