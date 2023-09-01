import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfileComponent} from './components/admin-profile/admin-profile.component';
import {AdminComponent} from './admin.component';
import {RouterModule} from "@angular/router";
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AddMedicineComponent} from "./components/admin-dashboard/add-medicine/add-medicine.component";
import {FormsModule} from "@angular/forms";
import {ManageMedicineComponent} from './components/manage-medicine/manage-medicine.component';
import {PurchaseHistoryComponent} from './components/purchase-history/purchase-history.component';
import {MedicineComponent} from './components/medicine/medicine.component';
import {ViewMedicineComponent} from './components/medicine/view-medicine/view-medicine.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {UpdateMedicineComponent} from './components/medicine/update-medicine/update-medicine.component';
import {MatInputModule} from "@angular/material/input";
import { AdminRouterModule } from './admin-router.module';
import { EffectsModule } from '@ngrx/effects';
import { MedicineEffects } from '../state/medicine.effects';
import { StoreModule } from '@ngrx/store';
import { medicineReducer } from '../state/medicine.reducers';


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
    ViewMedicineComponent,
    UpdateMedicineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    AdminRouterModule,
    StoreModule.forFeature('medicineState',medicineReducer),
    EffectsModule.forFeature([MedicineEffects])
  ],
})
export class AdminModule {
}
