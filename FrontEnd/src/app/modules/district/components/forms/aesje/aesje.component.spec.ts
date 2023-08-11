import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AesjeComponent } from './aesje.component';

describe('AesjeComponent', () => {
  let component: AesjeComponent;
  let fixture: ComponentFixture<AesjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AesjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AesjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
