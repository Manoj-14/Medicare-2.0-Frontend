import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication.component";
import {AdminLoginComponent} from "./components/admin-login/admin-login.component";
import {UserSignupComponent} from "./components/user-signup/user-signup.component";
import {UserLoginComponent} from "./components/user-login/user-login.component";

const routes: Routes = [
    {path: "adminLogin", component: AdminLoginComponent},
    {path: "userSignup", component: UserSignupComponent},
    {path: "userLogin", component: UserLoginComponent}
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
