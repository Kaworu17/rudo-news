import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewPasswordComponent } from './new-password.component';
import { NewPasswordFormComponent } from 'src/app/components/new-password-form/new-password-form.component';
import { NewPasswordDialogComponent } from '../../components/new-password-dialog/new-password-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';

const routes: Routes = [{ path: '', component: NewPasswordComponent }];

@NgModule({
  declarations: [
    NewPasswordComponent,
    NewPasswordFormComponent,
    NewPasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
    BreadcrumbModule,
  ],
})
export class NewPasswordModule {}
