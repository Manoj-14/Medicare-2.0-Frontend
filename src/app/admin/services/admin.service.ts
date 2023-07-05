import {HttpClient} from "@angular/common/http";
import {Admin} from "../../entities/admin";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  url: string = "http://localhost:8088/api/admin";

  constructor(public httpClient: HttpClient) {
  }

  create(admin: Admin) {
    return this.httpClient.post(`${this.url}/create`, admin);
  }

  authenticate(email: string, password: string) {
    return this.httpClient.post(`${this.url}/authenticate/${email}`, {"password": password})
  }

  getAdmin(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  changePassword(id: number, oldPassword: string, newPassword: string) {
    return this.httpClient.put(`${this.url}/changePassword/${id}`, {oldPassword, newPassword});
  }
}
