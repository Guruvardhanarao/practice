import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent, ForgotPasswordComponent]
})
export class LoginModule { }
