import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfileComponent} from './components/admin-profile/admin-profile.component';
import {AdminComponent} from './admin.component';
import {RouterModule} from "@angular/router";
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AddMedicineComponent} from "./components/admin-dashboard/add-medicine/add-medicine.component";
import {FormsModule} from "@angular/forms";
import { ManageMedicineComponent } from './components/manage-medicine/manage-medicine.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { ViewMedicineComponent } from './components/medicine/view-medicine/view-medicine.component';


@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminComponent,
    NavigationBarComponent,
    AdminDashboardComponent,
    AddMedicineComponent,
    ManageMedicineComponent,
    PurchaseHistoryComponent,
    MedicineComponent,
    ViewMedicineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class AdminModule {
}
