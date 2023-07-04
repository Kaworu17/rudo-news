import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';

const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    MatIconModule,
    ReactiveFormsModule,
    BreadcrumbModule,
  ],
})
export class RegisterModule {}
