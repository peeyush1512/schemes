import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbdcpComponent } from './nvbdcp.component';

describe('NvbdcpComponent', () => {
  let component: NvbdcpComponent;
  let fixture: ComponentFixture<NvbdcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvbdcpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvbdcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
