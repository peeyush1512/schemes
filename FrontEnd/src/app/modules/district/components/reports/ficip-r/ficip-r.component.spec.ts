import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicipRComponent } from './ficip-r.component';

describe('FicipRComponent', () => {
  let component: FicipRComponent;
  let fixture: ComponentFixture<FicipRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicipRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicipRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
