import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchwingRComponent } from './mchwing-r.component';

describe('MchwingRComponent', () => {
  let component: MchwingRComponent;
  let fixture: ComponentFixture<MchwingRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MchwingRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MchwingRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
