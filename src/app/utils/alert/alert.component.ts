import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdatePopupComponent } from 'src/app/user/components/user-profile/update-popup/update-popup.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<UpdatePopupComponent>,
    private alertDialogRef: MatDialogRef<AlertComponent>
  ) {}

  ngOnInit(): void {}

  submit() {
    this.dialogRef.close();
    this.dialogRef.beforeClosed().subscribe();
  }

  cancel() {
    this.alertDialogRef.close();
  }
}
