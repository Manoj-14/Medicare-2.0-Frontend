import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medicine } from 'src/app/entities/medicine';
import { UserService } from '../../services/user.service';
import { Cart } from 'src/app/entities/cart';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PurchaseComponent } from '../user-home/purchase/purchase.component';
import { NgDialogAnimationService } from 'src/app/services/my-animation.service';
import { Purchase } from 'src/app/entities/purchase';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent implements OnInit {
  @Input()
  medicine: Medicine;

  @Output()
  update = new EventEmitter<{ updated: boolean }>();

  @Input()
  cart?: Cart;

  @Input()
  purchase?: Purchase;

  @Input()
  userHome: boolean;
  @Input()
  userCart: boolean;
  @Input()
  userHistory: boolean;

  constructor(
    private userService: UserService,
    private dialog: NgDialogAnimationService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  viewMed() {
    throw new Error('Method not implemented.');
  }

  addToCart() {
    this.userService
      .addToCart(this.medicine.id, localStorage.getItem('userEmail'))
      .subscribe(
        (data) => {
          this.update.emit({ updated: true });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  rmFromCart() {
    this.userService
      .removeFromCart(this.medicine.id, localStorage.getItem('userEmail'))
      .subscribe(
        (data) => {
          this.update.emit({ updated: true });
        },
        (err) => {
          console.log(err);
        }
      );
  }
  rmMedicineFromCart() {
    this.userService
      .removeMedicineFromCart(
        this.medicine.id,
        localStorage.getItem('userEmail')
      )
      .subscribe(
        (data) => {
          this.update.emit({ updated: true });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  buyNow() {
    this.dialog.open(PurchaseComponent, {
      direction: 'ltr',
      animation: { to: 'left' },
      position: { rowEnd: '0' },
      data: this.medicine,
    });
    this.matDialog.afterAllClosed.subscribe(() => {
      this.update.emit({ updated: true });
    });
  }
}
