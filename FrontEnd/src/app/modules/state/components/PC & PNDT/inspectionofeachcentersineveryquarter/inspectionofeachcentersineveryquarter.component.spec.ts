import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent } from './inspectionofeachcentersineveryquarter.component';

describe('INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent', () => {
  let component: INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent;
  let fixture: ComponentFixture<INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
