import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobsuiFruChcsChsComponent } from './sobsui-fru-chcs-chs.component';

describe('SobsuiFruChcsChsComponent', () => {
  let component: SobsuiFruChcsChsComponent;
  let fixture: ComponentFixture<SobsuiFruChcsChsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobsuiFruChcsChsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobsuiFruChcsChsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
