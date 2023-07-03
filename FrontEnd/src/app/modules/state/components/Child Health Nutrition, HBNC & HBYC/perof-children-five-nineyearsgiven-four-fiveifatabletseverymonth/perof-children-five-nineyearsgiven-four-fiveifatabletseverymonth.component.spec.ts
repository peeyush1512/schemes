import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent } from './perof-children-five-nineyearsgiven-four-fiveifatabletseverymonth.component';

describe('PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent', () => {
  let component: PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent;
  let fixture: ComponentFixture<PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
