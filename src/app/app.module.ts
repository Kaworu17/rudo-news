import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatSelectModule } from '@angular/material/select';
import { DepartmentsDialogComponent } from './components/departments-dialog/departments-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { ForgottenPasswordFormComponent } from './components/forgotten-password-form/forgotten-password-form.component';
import { ForgottenPasswordDialogComponent } from './components/forgotten-password-dialog/forgotten-password-dialog.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { NewPasswordFormComponent } from './components/new-password-form/new-password-form.component';
import { NewPasswordDialogComponent } from './components/new-password-dialog/new-password-dialog.component';
import { NewsComponent } from './pages/news/news.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NewsDescriptionComponent } from './pages/news-description/news-description.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { LegalTextsComponent } from './components/legal-texts/legal-texts.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PolicysComponent } from './pages/policys/policys.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent,
    DepartmentsDialogComponent,
    HeaderComponent,
    BreadcrumbComponent,
    ForgottenPasswordComponent,
    ForgottenPasswordFormComponent,
    ForgottenPasswordDialogComponent,
    NewPasswordComponent,
    NewPasswordFormComponent,
    NewPasswordDialogComponent,
    NewsComponent,
    ProfileComponent,
    FavoritesComponent,
    CardComponent,
    SearchBarComponent,
    SearchFilterPipe,
    NewsDescriptionComponent,
    NewsDetailComponent,
    LegalTextsComponent,
    FaqComponent,
    TermsComponent,
    PolicysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
