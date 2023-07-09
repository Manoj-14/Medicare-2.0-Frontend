import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AdminLoginComponent} from "./authentication/components/admin-login/admin-login.component";
import {HomeComponent} from "./home/home.component";
import {UserSignupComponent} from "./authentication/components/user-signup/user-signup.component";
import {UserLoginComponent} from "./authentication/components/user-login/user-login.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminProfileComponent} from "./admin/components/admin-profile/admin-profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AdminDashboardComponent} from "./admin/components/admin-dashboard/admin-dashboard.component";
import {ManageMedicineComponent} from "./admin/components/manage-medicine/manage-medicine.component";
import {PurchaseHistoryComponent} from "./admin/components/purchase-history/purchase-history.component";


const routes: Routes = [{path: "", component: HomeComponent}, {
  path: "auth",
  component: AuthenticationComponent,
  children: [
    {path: "adminLogin", component: AdminLoginComponent},
    {path: "userSignup", component: UserSignupComponent},
    {path: "userLogin", component: UserLoginComponent},
  ]
},
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {path: "profile", component: AdminProfileComponent},
      {path: "dashboard", component: AdminDashboardComponent},
      {path: "manage-medicine", component: ManageMedicineComponent},
      {path: "history", component: PurchaseHistoryComponent}
    ]
  },
  {
    path: "**",
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
