import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AesjeRComponent } from './aesje-r.component';

describe('AesjeRComponent', () => {
  let component: AesjeRComponent;
  let fixture: ComponentFixture<AesjeRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AesjeRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AesjeRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
