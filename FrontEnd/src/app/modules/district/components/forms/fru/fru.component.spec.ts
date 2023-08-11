import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruComponent } from './fru.component';

describe('FruComponent', () => {
  let component: FruComponent;
  let fixture: ComponentFixture<FruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
