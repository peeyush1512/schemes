import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent } from './pw-given-one-albendazole-tablet-after-first-trimester.component';

describe('PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent', () => {
  let component: PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent;
  let fixture: ComponentFixture<PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
