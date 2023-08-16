import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {UserComponent} from './user.component';
import {RouterModule} from "@angular/router";
import {UserHomeComponent} from './components/user-home/user-home.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    NavigationBarComponent,
    UserComponent,
    UserHomeComponent,
    UserCartComponent,
    UserHistoryComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule {
}
