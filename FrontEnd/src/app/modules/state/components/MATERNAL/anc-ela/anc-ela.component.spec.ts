import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANCELAComponent } from './anc-ela.component';

describe('ANCELAComponent', () => {
  let component: ANCELAComponent;
  let fixture: ComponentFixture<ANCELAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANCELAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ANCELAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
