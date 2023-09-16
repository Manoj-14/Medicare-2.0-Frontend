import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { catchError } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { AlertComponent } from 'src/app/utils/alert/alert.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css'],
})
export class UpdatePopupComponent implements OnInit {
  updatePassword: boolean;
  updateAddress: boolean;
  updateEmail: boolean;
  updatePhone: boolean;

  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';

  addressForm = new FormGroup({
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    postalCode: new FormControl(),
  });

  passwordForm = new FormGroup({
    currentPassword: new FormControl(),
    newPassword: new FormControl(),
    confirmPassword: new FormControl(),
  });

  phoneForm = new FormGroup({
    phone: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UpdatePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.dialogRef.afterOpened().subscribe(() => {
      this.setUpdatePopUp(this.data);
    });
  }

  ngOnInit(): void {}

  addAddress() {
    this.userService.updateAddress(this.addressForm.value).subscribe(
      (data) => {
        this.addressForm.reset();
        this.errMsg = 'Address added Successfully';
        this.isSuccess = true;
        setTimeout(() => {
          this.dialogRef.close();
          this.isSuccess = false;
          this.errMsg = '';
        }, 1000);
      },
      (err) => {
        this.errMsg = err.error.message;
        this.isError = true;
        setInterval(() => {
          this.isError = false;
          this.errMsg = '';
        }, 2000);
      }
    );
  }

  setUpdatePopUp(data: any) {
    this.updateAddress = data.updateAddress;
    this.updateEmail = data.updateEmail;
    this.updatePassword = data.updatePassword;
    this.updatePhone = data.updatePhone;
  }

  changePassword() {
    this.userService
      .changePassword(
        this.passwordForm.value.currentPassword,
        this.passwordForm.value.newPassword
      )
      .subscribe(
        () => {
          this.passwordForm.reset();
          this.errMsg = 'Password Updated Successfully';
          this.isSuccess = true;
          setTimeout(() => {
            this.dialogRef.close();
            this.isSuccess = false;
            this.errMsg = '';
          }, 1000);
        },
        (err) => {
          if (err.error.status === 401) {
            this.errMsg = 'Password Not Matched';
            this.isError = true;
            setInterval(() => {
              this.isError = false;
              this.errMsg = '';
            }, 2000);
          }
        }
      );
  }

  addPhone() {
    this.userService.addPhone(this.phoneForm.value.phone).subscribe(
      () => {
        this.phoneForm.reset();
        this.errMsg = 'Phone Number Added';
        this.isSuccess = true;
        setTimeout(() => {
          this.dialogRef.close();
          this.isSuccess = false;
          this.errMsg = '';
        }, 1000);
      },
      (err) => {
        this.errMsg = err.error.message;
        this.isError = true;
        setInterval(() => {
          this.isError = false;
          this.errMsg = '';
        }, 2000);
      }
    );
  }
}
