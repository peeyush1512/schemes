import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofMDSRReviewComponent } from './statusof-mdsrreview.component';

describe('StatusofMDSRReviewComponent', () => {
  let component: StatusofMDSRReviewComponent;
  let fixture: ComponentFixture<StatusofMDSRReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofMDSRReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofMDSRReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
