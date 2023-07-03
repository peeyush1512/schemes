import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyclinicOPDAndVisitStatusComponent } from './polyclinic-opd-and-visit-status.component';

describe('PolyclinicOPDAndVisitStatusComponent', () => {
  let component: PolyclinicOPDAndVisitStatusComponent;
  let fixture: ComponentFixture<PolyclinicOPDAndVisitStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolyclinicOPDAndVisitStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolyclinicOPDAndVisitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
