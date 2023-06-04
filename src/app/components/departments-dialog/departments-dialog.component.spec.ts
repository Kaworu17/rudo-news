import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDialogComponent } from './departments-dialog.component';

describe('DepartmentsDialogComponent', () => {
  let component: DepartmentsDialogComponent;
  let fixture: ComponentFixture<DepartmentsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentsDialogComponent]
    });
    fixture = TestBed.createComponent(DepartmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
