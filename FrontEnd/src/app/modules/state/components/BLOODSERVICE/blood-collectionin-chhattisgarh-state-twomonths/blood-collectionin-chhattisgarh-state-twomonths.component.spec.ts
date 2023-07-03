import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCollectioninChhattisgarhStateTWOMONTHSComponent } from './blood-collectionin-chhattisgarh-state-twomonths.component';

describe('BloodCollectioninChhattisgarhStateTWOMONTHSComponent', () => {
  let component: BloodCollectioninChhattisgarhStateTWOMONTHSComponent;
  let fixture: ComponentFixture<BloodCollectioninChhattisgarhStateTWOMONTHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCollectioninChhattisgarhStateTWOMONTHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCollectioninChhattisgarhStateTWOMONTHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
