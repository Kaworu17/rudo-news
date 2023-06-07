import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentsDialogComponent } from '../departments-dialog/departments-dialog.component';
import { MatRadioChange } from '@angular/material/radio';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less'],
})
export class RegisterFormComponent {
  @ViewChild('focusInput') focusInput!: ElementRef;
  @ViewChild('departmentInput') departInput!: ElementRef;

  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;

  public arrayTestDepartments: string[] = [
    'Back',
    'RRHH',
    'Ios',
    'Android',
    'Diseño',
    'Proyectos',
    'Ventas',
    'Academy',
    'Flutter',
    'Ionic',
    'JP',
  ];
  public isShowPassword: boolean = false;
  public isRadioCheck: boolean = false;
  public isDisabled: boolean = true;
  public isIconEnabled: boolean = true;
  public registerForm: FormGroup = this.fb.group({
    name: [
      { value: '', disabled: this.isDisabled },
      [Validators.required, Validators.minLength(3)],
    ],
    departments: ['', [Validators.required]],
    mail: [
      { value: '', disabled: this.isDisabled },
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ],
    ],
    password: [
      { value: '', disabled: this.isDisabled },
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ],
    ],
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
        importedDepartments: this.arrayTestDepartments,
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
      this.isInputEnabled();
      this.focusInput.nativeElement.focus();
    });
  }

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  isMayus(word: string): boolean {
    return /[A-Z]/.test(word);
  }

  isMinus(word: string): boolean {
    return /[a-z]/.test(word);
  }

  hasLenght(word: string): boolean {
    return word.length > 7;
  }

  hasNumbers(word: string): boolean {
    return /[0-9]/.test(word);
  }
  hasEspecialCharacter(word: string): boolean {
    return /[#?!@$%^&*-]/.test(word);
  }

  isInputEnabled(): void {
    if (this.registerForm.controls['departments'].valid) {
      this.registerForm.controls['name'].enable();
      this.registerForm.controls['mail'].enable();
      this.registerForm.controls['password'].enable();
      this.isIconEnabled = false;
    } else {
      this.registerForm.controls['name'].disable();
      this.registerForm.controls['mail'].disable();
      this.registerForm.controls['password'].disable();
      this.isIconEnabled = true;
    }
  }

  radioButtonChange(data: MatRadioChange) {
    this.isRadioCheck = data.value;
  }
}
