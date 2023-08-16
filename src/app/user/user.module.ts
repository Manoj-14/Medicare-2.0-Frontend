import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    NavigationBarComponent,
    UserComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
}
