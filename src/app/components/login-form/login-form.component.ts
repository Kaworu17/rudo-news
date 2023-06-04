import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent {
  public loginForm: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public isShowPassword: boolean = false;

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  isValidField(field: string): boolean | null {
    return (
      this.loginForm.controls[field]?.errors &&
      this.loginForm.controls[field]?.touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.loginForm.controls[field]) return null;

    const error = this.loginForm.controls[field].errors || {};
    for (const key of Object.keys(error)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'email':
          return 'Este campo no es un email';
        case 'minlength':
          return `Mínimo ${error['minlength'].requiredLength} caracters.`;
      }
    }

    return null;
  }

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
