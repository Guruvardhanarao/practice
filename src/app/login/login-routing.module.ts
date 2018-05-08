import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: []
})
export class LoginRoutingModule { }
