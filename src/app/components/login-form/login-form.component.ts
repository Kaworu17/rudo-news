import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent {
  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;
  public loginForm: FormGroup = new FormGroup({
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
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

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
