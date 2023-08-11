import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicipComponent } from './ficip.component';

describe('FicipComponent', () => {
  let component: FicipComponent;
  let fixture: ComponentFixture<FicipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
