import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AdminLoginComponent} from "./authentication/components/admin-login/admin-login.component";
import {HomeComponent} from "./home/home.component";
import {UserSignupComponent} from "./authentication/components/user-signup/user-signup.component";
import {UserLoginComponent} from "./authentication/components/user-login/user-login.component";


const routes: Routes = [{path: "", component: HomeComponent}, {
  path: "auth",
  component: AuthenticationComponent,
  children: [
    {path: "adminLogin", component: AdminLoginComponent},
    {path: "userSignup", component: UserSignupComponent},
    {path: "userLogin", component: UserLoginComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
