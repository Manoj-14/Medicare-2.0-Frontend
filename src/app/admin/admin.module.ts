import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfileComponent} from './components/admin-profile/admin-profile.component';
import {AdminComponent} from './admin.component';
import {RouterModule} from "@angular/router";
import {AdminService} from "./services/admin.service";


@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class AdminModule {
}
