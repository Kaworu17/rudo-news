import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../register-form/register-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'departments-dialog',
  templateUrl: './departments-dialog.component.html',
  styleUrls: ['./departments-dialog.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DepartmentsDialogComponent {
  public selectedDepartments: string = '';

  public departments: FormGroup = this.fb.group({
    back: false,
    rrhh: false,
    ios: false,
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DepartmentsDialogComponent>
  ) {
    console.log('datos: ', data.selectedDepartments);
    this.departments = this.fb.group({
      back: data.selectedDepartments.includes('back'),
      rrhh: data.selectedDepartments.includes('rrhh'),
      ios: data.selectedDepartments.includes('ios'),
      android: data.selectedDepartments.includes('android'),
      diseño: data.selectedDepartments.includes('diseño'),
      proyectos: data.selectedDepartments.includes('proyectos'),
      ventas: data.selectedDepartments.includes('ventas'),
      academy: data.selectedDepartments.includes('academy'),
      flutter: data.selectedDepartments.includes('flutter'),
      ionic: data.selectedDepartments.includes('ionic'),
      jp: data.selectedDepartments.includes('jp'),
    });
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
