import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohwaSHWPComponent } from './tohwa-shwp.component';

describe('TohwaSHWPComponent', () => {
  let component: TohwaSHWPComponent;
  let fixture: ComponentFixture<TohwaSHWPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohwaSHWPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TohwaSHWPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
