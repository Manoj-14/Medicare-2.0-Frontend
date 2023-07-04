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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onUserSignup(user: User, f: NgForm) {
    console.log(user);
    this.userService.create(user).subscribe((res) => {
      console.log(res);
      f.resetForm();
    }, (err) => {
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 3000)
      console.log(err.error.message);
    })
  }
}
