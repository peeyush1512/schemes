import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruRComponent } from './fru-r.component';

describe('FruRComponent', () => {
  let component: FruRComponent;
  let fixture: ComponentFixture<FruRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
