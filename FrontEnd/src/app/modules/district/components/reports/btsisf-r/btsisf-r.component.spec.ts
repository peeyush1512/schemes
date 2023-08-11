import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsisfRComponent } from './btsisf-r.component';

describe('BtsisfRComponent', () => {
  let component: BtsisfRComponent;
  let fixture: ComponentFixture<BtsisfRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtsisfRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtsisfRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
