import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentsDialogComponent } from '../departments-dialog/departments-dialog.component';
import { MatRadioChange } from '@angular/material/radio';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';

@Component({
  selector: 'profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.less'],
})
export class ProfileEditFormComponent {
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
  public editProfileForm: FormGroup = this.fb.group({
    name: ['Rudo García', [Validators.required, Validators.minLength(3)]],
    departments: ['Android,Proyectos', [Validators.required]],
    mail: [
      'RudoGarcia@rudo.es',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ],
    ],
    password: [
      '',
      [
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ],
    ],
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  onSaveChanges(): void {
    if (this.editProfileForm.invalid) {
      this.editProfileForm.markAllAsTouched();
      return;
    }
    console.log(this.editProfileForm.value);
  }

  openDialog() {
    this.departInput.nativeElement.blur();
    const dialogRef = this.dialog.open(DepartmentsDialogComponent, {
      autoFocus: false,
      width: '400px',
      panelClass: 'custom-dialog',
      data: {
        selectedDepartments: this.editProfileForm.value.departments,
        importedDepartments: this.arrayTestDepartments,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const selectedDepartments = Object.keys(result.departments).filter(
          (key) => result.departments[key]
        );

        const departmentsValue =
          selectedDepartments.length > 0 ? selectedDepartments : '';

        this.editProfileForm.patchValue({
          departments: departmentsValue,
        });
      }

      this.focusInput.nativeElement.focus();
    });
  }

  openGenericDialog() {
    let testText: string = 'Los cambios se han guardado con exito';
    this.dialog.open(GenericDialogComponent, {
      width: '312px',
      panelClass: 'custom-dialog',
      /* data: this.forgottenPasswordForm.value.mail, */
      data: { testText },
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
}
