import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFPPrioritiesComponent } from './key-fp-priorities.component';

describe('KeyFPPrioritiesComponent', () => {
  let component: KeyFPPrioritiesComponent;
  let fixture: ComponentFixture<KeyFPPrioritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyFPPrioritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFPPrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
