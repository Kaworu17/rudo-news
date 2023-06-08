import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';
import { NewPasswordDialogComponent } from '../new-password-dialog/new-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.less'],
})
export class NewPasswordFormComponent {
  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;
  public isShowPassword: boolean = false;
  public isShowPasswordB: boolean = false;
  public isShowPasswordC: boolean = false;
  public isPasswordMatch: boolean = false;
  public newPasswordForm: FormGroup = new FormGroup({
    actualPassword: new FormControl('', [
      Validators.required,
      /* Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      ), */
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      /* Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      ), */
    ]),
    repeatNewPassword: new FormControl('', [
      Validators.required,
      /* Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      ), */
    ]),
  });

  constructor(public dialog: MatDialog) {}

  onNewPwRecovery(): void {
    if (this.newPasswordForm.valid) {
      console.log(this.newPasswordForm.value);
    } else {
      this.newPasswordForm.markAllAsTouched();
    }
  }

  openDialog(): void {
    this.isPasswordMatch = this.checkPasswords();
    this.dialog.open(NewPasswordDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog',
      data: this.isPasswordMatch,
    });
  }

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  toggleShowPasswordB(): void {
    this.isShowPasswordB = !this.isShowPasswordB;
  }

  toggleShowPasswordC(): void {
    this.isShowPasswordC = !this.isShowPasswordC;
  }

  checkPasswords(): boolean {
    let oldPw = this.newPasswordForm.controls['actualPassword'].value;
    let newPw = this.newPasswordForm.controls['newPassword'].value;
    let repNewPw = this.newPasswordForm.controls['repeatNewPassword'].value;

    if (oldPw != newPw && newPw == repNewPw) {
      return true;
    } else return false;
  }
}
