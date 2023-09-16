import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/entities/purchase';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css'],
})
export class UserHistoryComponent implements OnInit {
  purchases: Purchase[];

  constructor(private userService: UserService) {
    this.fetchPurchase();
  }

  ngOnInit(): void {}

  fetchPurchase() {
    this.userService.getPurchases().subscribe(
      (dbPurchases: Purchase[]) => {
        this.purchases = dbPurchases;
        console.log(this.purchases);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  updated() {
    this.fetchPurchase();
  }
}
