import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private authenticationService: AuthenticateService,
    private location: Location
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authenticationService.isAuthenticated()) {
      let userRegExp = new RegExp('/user/*');
      if (userRegExp.test(this.location.path())) {
        this.router.navigate(['auth/userLogin'], {
          queryParams: { expired: 'true' },
        });
      } else {
        this.router.navigate(['auth/adminLogin'], {
          queryParams: { expired: 'true' },
        });
      }
      return false;
    }
    return true;
  }
}
