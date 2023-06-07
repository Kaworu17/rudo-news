import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { ForgottenPasswordDialogComponent } from '../forgotten-password-dialog/forgotten-password-dialog.component';

@Component({
  selector: 'forgotten-password-form',
  templateUrl: './forgotten-password-form.component.html',
  styleUrls: ['./forgotten-password-form.component.less'],
})
export class ForgottenPasswordFormComponent {
  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;
  constructor(public dialog: MatDialog) {}

  public forgottenPasswordForm: FormGroup = new FormGroup({
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
  });

  onPwRecovery(): void {
    if (this.forgottenPasswordForm.valid) {
      console.log(this.forgottenPasswordForm.value);
    } else {
      this.forgottenPasswordForm.markAllAsTouched();
    }
  }

  openDialog() {
    this.dialog.open(ForgottenPasswordDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog',
      /* data: this.forgottenPasswordForm.value.mail, */
      data: this.forgottenPasswordForm.controls['mail'].value,
    });
  }
}
