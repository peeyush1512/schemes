import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIRSTREFERRALUNITFRUComponent } from './firstreferralunit-fru.component';

describe('FIRSTREFERRALUNITFRUComponent', () => {
  let component: FIRSTREFERRALUNITFRUComponent;
  let fixture: ComponentFixture<FIRSTREFERRALUNITFRUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIRSTREFERRALUNITFRUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FIRSTREFERRALUNITFRUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
