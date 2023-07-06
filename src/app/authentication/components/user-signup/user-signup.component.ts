import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../../entities/user";
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  isError: boolean = false;
  isSuccess: boolean = false;
  errMsg: string = "";

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onUserSignup(user: User, f: NgForm) {

    this.userService.create(user).subscribe((res) => {

    }, (err) => {
      this.isError = true;
      this.errMsg = err.error.message;
      setTimeout(() => {
        this.isError = false;
        this.errMsg = "";
      }, 3000)
    }, () => {
      this.isSuccess = true;
      this.errMsg = `User account for ${user.name} created successfully please login`;
      setTimeout(() => {
        this.isSuccess = false;
        this.errMsg = "";
      }, 3000)
    })
    f.resetForm();
  }
}
