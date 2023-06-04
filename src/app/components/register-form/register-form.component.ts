import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentsDialogComponent } from '../departments-dialog/departments-dialog.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less'],
})
export class RegisterFormComponent {
  @ViewChild('focusInput') focusInput!: ElementRef;
  @ViewChild('departmentInput') departInput!: ElementRef;

  public registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    departments: ['', [Validators.required]],
    mail: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
  }

  openDialog() {
    this.departInput.nativeElement.blur();
    const dialogRef = this.dialog.open(DepartmentsDialogComponent, {
      autoFocus: false,
      width: '400px',
      panelClass: 'custom-dialog',
      data: {
        selectedDepartments: this.registerForm.value.departments,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const selectedDepartments = Object.keys(result.departments).filter(
          (key) => result.departments[key]
        );
        /* .map(
            (key) => key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
          )
          .join(', '); */

        const departmentsValue =
          selectedDepartments.length > 0 ? selectedDepartments : '';

        this.registerForm.patchValue({
          departments: departmentsValue,
        });
      }
      this.focusInput.nativeElement.focus();
    });
  }
}
