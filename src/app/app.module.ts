import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DepartmentsDialogComponent } from './components/departments-dialog/departments-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './components/header/header.component';
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
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileEditFormComponent } from './components/profile-edit-form/profile-edit-form.component';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsDialogComponent,
    HeaderComponent,
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
    ProfileEditComponent,
    ProfileEditFormComponent,
    GenericDialogComponent,
    PresentationComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
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
    MatChipsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    BreadcrumbModule,
  ],
})
export class AppModule {}
