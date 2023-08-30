import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router:Router,private authenticationService:AuthenticateService){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authenticationService.isAuthenticated()){
        this.router.navigate(["auth/adminLogin"],{ queryParams: { expired: 'true' } })
        return false;
      }
    return true;
  }
}
