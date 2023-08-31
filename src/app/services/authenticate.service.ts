import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, tap, throwError} from "rxjs";
import {User} from "../entities/user";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  url: string = `${environment.SERVER_URL}`;

  constructor(private httpClient: HttpClient, private jwtHelper:JwtHelperService) {
  }

  login(data: { email: string, password: string }) {
    return this.httpClient.post(`${this.url}/users/authenticate`, data).pipe(
      tap(data => data),
      catchError(err => throwError(() => err))
    )
  }

  register(data: User) {
    return this.httpClient.post(`${this.url}/users/create`, data).pipe(
      tap(data => data),
      catchError(err => throwError(() => err))
    )
  }

  isAuthenticated(){
    const token = localStorage.getItem("token");
    console.log(token,this.jwtHelper.isTokenExpired(token))
    return !this.jwtHelper.isTokenExpired(token);
  }
}
