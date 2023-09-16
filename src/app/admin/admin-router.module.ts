import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageMedicineComponent } from './components/manage-medicine/manage-medicine.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { FormGuard } from '../guards/form.guard';

const routes: Routes = [
  { path: 'profile', component: AdminProfileComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canDeactivate: [FormGuard],
  },
  {
    path: 'manage-medicine',
    component: ManageMedicineComponent,
  },
  {
    path: 'history',
    component: PurchaseHistoryComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouterModule {}
