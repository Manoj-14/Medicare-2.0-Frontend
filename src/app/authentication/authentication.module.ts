import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { AdminModule } from '../admin/admin.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    AdminLoginComponent,
    UserSignupComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserModule,
    AdminModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule {}
