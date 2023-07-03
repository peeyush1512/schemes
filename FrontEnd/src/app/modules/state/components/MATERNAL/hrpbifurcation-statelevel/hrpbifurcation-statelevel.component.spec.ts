import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRPbifurcationStatelevelComponent } from './hrpbifurcation-statelevel.component';

describe('HRPbifurcationStatelevelComponent', () => {
  let component: HRPbifurcationStatelevelComponent;
  let fixture: ComponentFixture<HRPbifurcationStatelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRPbifurcationStatelevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRPbifurcationStatelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
