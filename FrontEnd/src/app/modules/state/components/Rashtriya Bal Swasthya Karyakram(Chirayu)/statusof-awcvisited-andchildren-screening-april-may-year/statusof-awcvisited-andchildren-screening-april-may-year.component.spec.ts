import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent } from './statusof-awcvisited-andchildren-screening-april-may-year.component';

describe('StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent', () => {
  let component: StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent;
  let fixture: ComponentFixture<StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
