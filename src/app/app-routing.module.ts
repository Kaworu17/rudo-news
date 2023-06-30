import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { NewsComponent } from './pages/news/news.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewsDescriptionComponent } from './pages/news-description/news-description.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PolicysComponent } from './pages/policys/policys.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
  { path: 'forgotten', redirectTo: 'forgotten-password' },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:title', component: NewsDescriptionComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/faq', component: FaqComponent },
  { path: 'profile/terms', component: TermsComponent },
  { path: 'profile/policys', component: PolicysComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
