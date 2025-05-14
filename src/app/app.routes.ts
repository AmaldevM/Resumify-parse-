import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { UploadresumeComponent } from './uploadresume/uploadresume.component';
import { ParsedresumeComponent } from './parsedresume/parsedresume.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { AboutComponent } from './home/about/about.component';
import { ForgotpassComponent } from './Auth/forgotpass/forgotpass.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: UploadresumeComponent },
  { path: 'parsed', component: ParsedresumeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forgot-password', component: ForgotpassComponent },

  // Lazy loaded
  {
    path: 'features',
    loadComponent: () =>
      import('./home/features/features.component').then(m => m.FeaturesComponent),
  },

  // Always last
  { path: '**', redirectTo: '' },
];
