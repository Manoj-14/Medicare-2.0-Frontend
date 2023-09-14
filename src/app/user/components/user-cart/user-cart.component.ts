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
}
