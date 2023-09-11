import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../entities/user';
import { UserService } from '../../../user/services/user.service';
import { AuthenticateService } from '../../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  isError: boolean = false;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticateService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onUserLogin(user: User, f: NgForm) {
    this.authenticationService
      .login({ email: user.email, password: user.password })
      .subscribe(
        (data: { token: string }) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userEmail', user.email);
          this.route.navigate(['/user/home']);
        },
        (error) => {
          this.isError = true;
        }
      );
  }
}
