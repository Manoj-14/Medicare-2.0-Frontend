import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../../entities/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = "http://localhost:8088/api/admin";

  constructor(private httpClient: HttpClient) {
  }

  create(admin: Admin) {
    return this.httpClient.post(`${this.url}/create`, admin);
  }

  authenticate(email: string, password: string) {
    return this.httpClient.post(`${this.url}/authenticate/${email}`, {"password": password})
  }

}
