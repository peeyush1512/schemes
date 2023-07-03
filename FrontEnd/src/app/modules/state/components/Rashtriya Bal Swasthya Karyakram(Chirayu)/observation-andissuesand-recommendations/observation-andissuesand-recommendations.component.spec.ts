import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationANDIssuesandRecommendationsComponent } from './observation-andissuesand-recommendations.component';

describe('ObservationANDIssuesandRecommendationsComponent', () => {
  let component: ObservationANDIssuesandRecommendationsComponent;
  let fixture: ComponentFixture<ObservationANDIssuesandRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservationANDIssuesandRecommendationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservationANDIssuesandRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
