import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medicine } from 'src/app/entities/medicine';
import { UserService } from '../../services/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  viewMed() {
    throw new Error('Method not implemented.');
  }

  addToCart() {
    console.log('Adding to cart......');
    this.userService
      .addToCart(this.medicine.id, localStorage.getItem('userEmail'))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  buyNow() {
    throw new Error('Method not implemented.');
  }
}
