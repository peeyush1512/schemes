import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchwingComponent } from './mchwing.component';

describe('MchwingComponent', () => {
  let component: MchwingComponent;
  let fixture: ComponentFixture<MchwingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MchwingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MchwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
