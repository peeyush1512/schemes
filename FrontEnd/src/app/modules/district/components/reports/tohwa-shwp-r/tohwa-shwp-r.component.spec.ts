import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohwaSHWPRComponent } from './tohwa-shwp-r.component';

describe('TohwaSHWPRComponent', () => {
  let component: TohwaSHWPRComponent;
  let fixture: ComponentFixture<TohwaSHWPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohwaSHWPRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TohwaSHWPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
