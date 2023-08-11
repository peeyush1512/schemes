import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsisfComponent } from './btsisf.component';

describe('BtsisfComponent', () => {
  let component: BtsisfComponent;
  let fixture: ComponentFixture<BtsisfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtsisfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtsisfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
