import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../../entities/user";
import {AdminService} from "../../../admin/services/admin.service";
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isError: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onUserLogin(user: User, f: NgForm) {
    this.userService.authenticate(user.email, user.password).subscribe((dbUser: User) => {
      console.log(dbUser);
    }, (error) => {
      console.log(error.error.message);
    })
  }

}
