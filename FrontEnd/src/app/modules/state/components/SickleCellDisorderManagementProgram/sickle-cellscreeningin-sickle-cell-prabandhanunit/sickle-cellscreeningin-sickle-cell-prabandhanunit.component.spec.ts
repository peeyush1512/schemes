import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SickleCellscreeninginSickleCellPrabandhanunitComponent } from './sickle-cellscreeningin-sickle-cell-prabandhanunit.component';

describe('SickleCellscreeninginSickleCellPrabandhanunitComponent', () => {
  let component: SickleCellscreeninginSickleCellPrabandhanunitComponent;
  let fixture: ComponentFixture<SickleCellscreeninginSickleCellPrabandhanunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SickleCellscreeninginSickleCellPrabandhanunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SickleCellscreeninginSickleCellPrabandhanunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
