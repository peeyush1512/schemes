import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriatricElderlyWardStatusComponent } from './geriatric-elderly-ward-status.component';

describe('GeriatricElderlyWardStatusComponent', () => {
  let component: GeriatricElderlyWardStatusComponent;
  let fixture: ComponentFixture<GeriatricElderlyWardStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeriatricElderlyWardStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeriatricElderlyWardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
