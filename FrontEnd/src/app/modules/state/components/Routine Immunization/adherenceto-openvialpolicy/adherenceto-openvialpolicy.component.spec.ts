import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherencetoOpenvialpolicyComponent } from './adherenceto-openvialpolicy.component';

describe('AdherencetoOpenvialpolicyComponent', () => {
  let component: AdherencetoOpenvialpolicyComponent;
  let fixture: ComponentFixture<AdherencetoOpenvialpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherencetoOpenvialpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdherencetoOpenvialpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
