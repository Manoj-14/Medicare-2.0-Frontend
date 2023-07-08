import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfileComponent} from './components/admin-profile/admin-profile.component';
import {AdminComponent} from './admin.component';
import {RouterModule} from "@angular/router";
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AddMedicineComponent} from "./components/admin-dashboard/add-medicine/add-medicine.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminComponent,
    NavigationBarComponent,
    AdminDashboardComponent,
    AddMedicineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class AdminModule {
}
