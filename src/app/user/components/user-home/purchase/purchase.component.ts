import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Medicine } from 'src/app/entities/medicine';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  medicine: Medicine;

  constructor(
    private dialogRef: MatDialogRef<PurchaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Medicine,
    private userService: UserService
  ) {
    this.medicine = data;
  }

  ngOnInit(): void {}

  buyNow() {
    this.userService
      .purchaseMedicine(this.medicine.id, 1, this.medicine.price * 1.0)
      .subscribe(
        () => {
          this.dialogRef.close();
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
