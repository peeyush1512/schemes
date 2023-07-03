import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtBloodCenterCampCollectionLASTYEARComponent } from './govt-blood-center-camp-collection-lastyear.component';

describe('GovtBloodCenterCampCollectionLASTYEARComponent', () => {
  let component: GovtBloodCenterCampCollectionLASTYEARComponent;
  let fixture: ComponentFixture<GovtBloodCenterCampCollectionLASTYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtBloodCenterCampCollectionLASTYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovtBloodCenterCampCollectionLASTYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
