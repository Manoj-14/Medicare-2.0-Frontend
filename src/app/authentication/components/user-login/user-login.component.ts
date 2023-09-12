import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../entities/user';
import { UserService } from '../../../user/services/user.service';
import { AuthenticateService } from '../../../services/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  isError: boolean = false;
  errMsg: string = '';

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => {
        if (params['expired'] === 'true') {
          this.isError = true;
          this.errMsg = 'Login had expired please login again';
          setTimeout(() => {
            this.isError = false;
            this.errMsg = '';
          }, 5000);
        }
      },
      (err) => {
        this.isError = true;
        this.errMsg = err.message;
        setTimeout(() => {
          this.isError = false;
          this.errMsg = '';
        }, 5000);
      }
    );
  }

  onUserLogin(user: User, f: NgForm) {
    this.authenticationService
      .login({ email: user.email, password: user.password })
      .subscribe(
        (data: { token: string }) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userEmail', user.email);
          this.router.navigate(['/user/home']);
        },
        (error) => {
          this.isError = true;
        }
      );
  }
}
