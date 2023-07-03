import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuteEncephalitisSyndromeJapaneseEncephalitisComponent } from './acute-encephalitis-syndrome-japanese-encephalitis.component';

describe('AcuteEncephalitisSyndromeJapaneseEncephalitisComponent', () => {
  let component: AcuteEncephalitisSyndromeJapaneseEncephalitisComponent;
  let fixture: ComponentFixture<AcuteEncephalitisSyndromeJapaneseEncephalitisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuteEncephalitisSyndromeJapaneseEncephalitisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuteEncephalitisSyndromeJapaneseEncephalitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
