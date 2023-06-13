import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTextsComponent } from './legal-texts.component';

describe('LegalTextsComponent', () => {
  let component: LegalTextsComponent;
  let fixture: ComponentFixture<LegalTextsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalTextsComponent]
    });
    fixture = TestBed.createComponent(LegalTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
