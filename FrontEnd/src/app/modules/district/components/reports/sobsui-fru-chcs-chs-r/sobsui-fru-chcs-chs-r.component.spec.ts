import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobsuiFruChcsChsRComponent } from './sobsui-fru-chcs-chs-r.component';

describe('SobsuiFruChcsChsRComponent', () => {
  let component: SobsuiFruChcsChsRComponent;
  let fixture: ComponentFixture<SobsuiFruChcsChsRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobsuiFruChcsChsRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobsuiFruChcsChsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
