import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRouterModule } from './user-router.module';
import { MedicineComponent } from './components/medicine/medicine.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavigationBarComponent,
    UserComponent,
    UserHomeComponent,
    UserCartComponent,
    UserHistoryComponent,
    UserProfileComponent,
    MedicineComponent,
  ],
  imports: [CommonModule, RouterModule, UserRouterModule, FormsModule],
})
export class UserModule {}
