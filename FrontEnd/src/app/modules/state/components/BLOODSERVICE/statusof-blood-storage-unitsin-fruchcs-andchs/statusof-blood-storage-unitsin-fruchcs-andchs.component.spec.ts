import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent } from './statusof-blood-storage-unitsin-fruchcs-andchs.component';

describe('StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent', () => {
  let component: StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent;
  let fixture: ComponentFixture<StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
