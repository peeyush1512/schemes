import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPIUCDAcceptancePERComponent } from './ppiucd-acceptance-per.component';

describe('PPIUCDAcceptancePERComponent', () => {
  let component: PPIUCDAcceptancePERComponent;
  let fixture: ComponentFixture<PPIUCDAcceptancePERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPIUCDAcceptancePERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPIUCDAcceptancePERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
