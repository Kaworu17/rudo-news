import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forgotten-password-form',
  templateUrl: './forgotten-password-form.component.html',
  styleUrls: ['./forgotten-password-form.component.less'],
})
export class ForgottenPasswordFormComponent {
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

  isValidField(field: string): boolean | null {
    return (
      this.forgottenPasswordForm.controls[field]?.errors &&
      this.forgottenPasswordForm.controls[field]?.touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.forgottenPasswordForm.controls[field]) return null;

    /*  console.log(this.registerForm.controls[field].value); */
    let word = this.forgottenPasswordForm.controls[field].value;

    const error = this.forgottenPasswordForm.controls[field].errors || {};
    for (const key of Object.keys(error)) {
      switch (key) {
        case 'required':
          return 'Este campo no puede quedar vacío';
        case 'email':
          return 'Este campo no es un email';
        case 'minlength':
          return `Mínimo ${error['minlength'].requiredLength} caracters.`;
        case 'pattern':
          return 'Este campo no cumple el pattern';
      }
    }

    return null;
  }
}
