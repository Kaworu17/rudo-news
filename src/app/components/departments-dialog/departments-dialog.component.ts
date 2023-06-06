import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'departments-dialog',
  templateUrl: './departments-dialog.component.html',
  styleUrls: ['./departments-dialog.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DepartmentsDialogComponent {
  public selectedDepartments: string = '';
  public importedDepartmentsList: string[] = [];

  public departments: FormGroup = this.fb.group({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DepartmentsDialogComponent>
  ) {
    this.importedDepartmentsList = data.importedDepartments;
    console.log('selectedDepartments: ', data.selectedDepartments);

    this.addFormGroupElements();
  }

  addFormGroupElements() {
    this.importedDepartmentsList.forEach((element) => {
      /* console.log('element: ', element); */

      this.departments.addControl(
        element,
        new FormControl(
          this.data.selectedDepartments.includes(element),
          Validators.required
        )
      );
    });

    console.log('departments: ', this.departments.value);
  }

  onSave(): void {
    this.dialogRef.close({
      departments: this.departments.value,
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
