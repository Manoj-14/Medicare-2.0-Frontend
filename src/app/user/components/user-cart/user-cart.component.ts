import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Medicine } from 'src/app/entities/medicine';
import { Cart } from 'src/app/entities/cart';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  cartMedicines: Cart[];
  medicines: Medicine;

  constructor(private userService: UserService) {
    this.fetchCart();
  }

  ngOnInit(): void {}

  fetchCart() {
    this.userService.getCart().subscribe((cart: Cart[]) => {
      this.cartMedicines = cart;
    });
  }

  updated() {
    this.fetchCart();
  }

  buyAll() {
    this.userService
      .purchaseFromCart(this.cartToPurchases(this.cartMedicines))
      .subscribe(
        (data) => {
          this.fetchCart();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  private cartToPurchases(cartList: Cart[]): any {
    interface purchaseMapper {
      medicineId: number;
      quantity: number;
      totalAmount: number;
    }
    let purchaseRequest: purchaseMapper[] = [];
    cartList.forEach((cart) => {
      const purchase: purchaseMapper = {
        medicineId: cart.medicines.id,
        quantity: cart.quantity,
        totalAmount: cart.quantity * cart.medicines.price,
      };
      console.log(purchase);
      purchaseRequest.push(purchase);
    });
    console.log({ purchases: purchaseRequest });
    return { purchases: purchaseRequest };
  }
}
