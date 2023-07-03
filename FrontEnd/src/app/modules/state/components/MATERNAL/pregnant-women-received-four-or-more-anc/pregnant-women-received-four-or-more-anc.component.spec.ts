import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnantWomenReceivedFOUROrMoreANCComponent } from './pregnant-women-received-four-or-more-anc.component';

describe('PregnantWomenReceivedFOUROrMoreANCComponent', () => {
  let component: PregnantWomenReceivedFOUROrMoreANCComponent;
  let fixture: ComponentFixture<PregnantWomenReceivedFOUROrMoreANCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnantWomenReceivedFOUROrMoreANCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnantWomenReceivedFOUROrMoreANCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
