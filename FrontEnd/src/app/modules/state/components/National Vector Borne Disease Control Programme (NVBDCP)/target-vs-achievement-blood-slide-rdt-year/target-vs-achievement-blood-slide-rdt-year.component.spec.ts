import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetVsAchievementBloodSlideRDTYEARComponent } from './target-vs-achievement-blood-slide-rdt-year.component';

describe('TargetVsAchievementBloodSlideRDTYEARComponent', () => {
  let component: TargetVsAchievementBloodSlideRDTYEARComponent;
  let fixture: ComponentFixture<TargetVsAchievementBloodSlideRDTYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetVsAchievementBloodSlideRDTYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetVsAchievementBloodSlideRDTYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
