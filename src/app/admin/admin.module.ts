import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfileComponent} from './components/admin-profile/admin-profile.component';
import {AdminComponent} from './admin.component';
import {RouterModule} from "@angular/router";
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class AdminModule {
}
