import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgottenPasswordComponent } from './forgotten-password.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ForgottenPasswordFormComponent } from '../../components/forgotten-password-form/forgotten-password-form.component';
import { ForgottenPasswordDialogComponent } from 'src/app/components/forgotten-password-dialog/forgotten-password-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: ForgottenPasswordComponent }];

@NgModule({
  declarations: [
    ForgottenPasswordComponent,
    ForgottenPasswordFormComponent,
    ForgottenPasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
    BreadcrumbModule,
  ],
})
export class ForgottenPasswordModule {}
