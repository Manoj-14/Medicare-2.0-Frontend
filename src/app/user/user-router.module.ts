import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdatePopupComponent } from './components/user-profile/update-popup/update-popup.component';
import { FormGuard } from '../guards/form.guard';

const route: Routes = [
  {
    path: 'home',
    component: UserHomeComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
  {
    path: 'history',
    component: UserHistoryComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UserRouterModule {}
