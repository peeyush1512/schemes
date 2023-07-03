import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANCFIRSTComponent } from './anc-first.component';

describe('ANCFIRSTComponent', () => {
  let component: ANCFIRSTComponent;
  let fixture: ComponentFixture<ANCFIRSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANCFIRSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ANCFIRSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
