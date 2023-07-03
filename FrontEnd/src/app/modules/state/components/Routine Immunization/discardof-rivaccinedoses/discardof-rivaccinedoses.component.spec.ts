import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardofRIvaccinedosesComponent } from './discardof-rivaccinedoses.component';

describe('DiscardofRIvaccinedosesComponent', () => {
  let component: DiscardofRIvaccinedosesComponent;
  let fixture: ComponentFixture<DiscardofRIvaccinedosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscardofRIvaccinedosesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardofRIvaccinedosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
