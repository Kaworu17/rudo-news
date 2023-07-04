import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidFielComprobation, getFieldError } from 'src/app/utils/utils';
import {
  BackendDataService,
  Network,
} from '../../services/backend-data.service';
import { HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent {
  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;
  public loginForm: FormGroup = new FormGroup({
    mail: new FormControl('ramonpuchades@rudo.es', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
    password: new FormControl('Puchades123!', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public isShowPassword: boolean = false;

  constructor(
    private backendDataService: BackendDataService,
    private network: Network,
    public dialog: MatDialog,
    private router: Router
  ) {}

  async onLogin(): Promise<void> {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      let test = await this.network.authToken(
        this.loginForm.value['mail'],
        this.loginForm.value['password']
      );
      console.log('test:', test);
      if (test == false) {
        this.openGenericDialog();
      } else {
        this.router.navigate(['/news']);
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  openGenericDialog() {
    let testText: string = 'El usuario o contraseña no son correctos';
    let titleText: string = 'Acceso denegado';
    this.dialog.open(GenericDialogComponent, {
      width: '312px',
      panelClass: 'custom-dialog',
      data: { testText, titleText, cancel: false },
    });
  }
}
