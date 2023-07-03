import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent } from './amb-per-of-children-s-fn-monthsgiven-e-t-dosesof-ifasyrupeverymonth.component';

describe('AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent', () => {
  let component: AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent;
  let fixture: ComponentFixture<AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
