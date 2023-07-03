import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnemiaMuktBharatAMBComponent } from './anemia-mukt-bharat-amb.component';

describe('AnemiaMuktBharatAMBComponent', () => {
  let component: AnemiaMuktBharatAMBComponent;
  let fixture: ComponentFixture<AnemiaMuktBharatAMBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnemiaMuktBharatAMBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnemiaMuktBharatAMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
