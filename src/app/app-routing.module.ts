import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UserComponent} from "./user/user.component";
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [{path: "", component: HomeComponent}, {
  path: "auth",
  component: AuthenticationComponent,
  loadChildren:()=> import("./authentication/authentication.module").then((m)=>m.AuthenticationModule)
},
  {
    path: "admin",
    component: AdminComponent,
    canLoad:[AuthGuard],
    loadChildren:()=>import("./admin/admin.module").then((m)=> m.AdminModule),
  },
  {
    path: "user",
    component: UserComponent,
    canLoad:[AuthGuard],
    loadChildren:()=>import("./user/user.module").then((m)=> m.UserModule),
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
