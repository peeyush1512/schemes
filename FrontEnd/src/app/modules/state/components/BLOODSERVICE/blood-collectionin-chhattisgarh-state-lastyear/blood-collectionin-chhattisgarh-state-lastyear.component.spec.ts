import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCollectioninChhattisgarhStateLASTYEARComponent } from './blood-collectionin-chhattisgarh-state-lastyear.component';

describe('BloodCollectioninChhattisgarhStateLASTYEARComponent', () => {
  let component: BloodCollectioninChhattisgarhStateLASTYEARComponent;
  let fixture: ComponentFixture<BloodCollectioninChhattisgarhStateLASTYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCollectioninChhattisgarhStateLASTYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCollectioninChhattisgarhStateLASTYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
