import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/entities/user';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { UpdatePopupComponent } from './update-popup/update-popup.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.fetchProfile();
  }

  ngOnInit(): void {}

  private fetchProfile() {
    this.userService.getProfile().subscribe(
      (dbUser: User) => {
        this.user = dbUser;
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }

  updateAddress() {
    this.dialog.open(UpdatePopupComponent, {
      width: '25rem',
      data: {
        updateAddress: true,
      },
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.fetchProfile();
    });
  }

  addPhone() {
    this.dialog.open(UpdatePopupComponent, {
      width: '25rem',
      data: {
        updatePhone: true,
      },
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.fetchProfile();
    });
  }

  changePassword() {
    this.dialog.open(UpdatePopupComponent, {
      width: '25rem',
      data: {
        updatePassword: true,
      },
    });
  }

  updateProfile() {
    this.fetchProfile();
  }
}
