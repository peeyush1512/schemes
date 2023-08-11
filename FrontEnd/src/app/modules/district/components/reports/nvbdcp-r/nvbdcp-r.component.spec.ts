import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbdcpRComponent } from './nvbdcp-r.component';

describe('NvbdcpRComponent', () => {
  let component: NvbdcpRComponent;
  let fixture: ComponentFixture<NvbdcpRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvbdcpRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvbdcpRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
