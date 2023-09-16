import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  isClose: boolean = true;

  constructor(private userService: UserService) {
    this.fetchProfile();
  }

  user: User;

  ngOnInit(): void {}

  toggleNav() {
    this.isClose = !this.isClose;
  }

  fetchProfile() {
    this.userService.getProfile().subscribe((user: User) => {
      this.user = user;
    });
  }
}
