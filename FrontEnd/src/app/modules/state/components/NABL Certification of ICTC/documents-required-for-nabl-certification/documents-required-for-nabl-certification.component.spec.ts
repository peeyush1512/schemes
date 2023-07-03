import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsRequiredForNABLCertificationComponent } from './documents-required-for-nabl-certification.component';

describe('DocumentsRequiredForNABLCertificationComponent', () => {
  let component: DocumentsRequiredForNABLCertificationComponent;
  let fixture: ComponentFixture<DocumentsRequiredForNABLCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsRequiredForNABLCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsRequiredForNABLCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
