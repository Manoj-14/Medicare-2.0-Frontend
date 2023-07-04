import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../entities/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8088/api/user";

  constructor(private httpClient: HttpClient) {
  }

  create(user: User) {
    return this.httpClient.post(`${this.url}/create`, user);
  }

  authenticate(email: string, password: string) {
    return this.httpClient.post(`${this.url}/authenticate`, {"email": email, "password": password});
  }

  changePassword(id: number, oldPassword: string, newPassword) {
    return this.httpClient.put(`${this.url}/changePassword/${id}`, {
      "oldPassword": oldPassword,
      "newPassword": newPassword
    });
  }

  addToCart(medicineId: number, email: string) {
    return this.httpClient.put(`${this.url}/users/addToCart/${medicineId}`, {"email": email});
  }

  removeFromCart(medicineId: number, email: string) {
    return this.httpClient.put(`${this.url}/users/removeToCart/${medicineId}`, {"email": email});
  }

  purchaseMedicine(email: string, medicineId: number, quantity: number, totalAmount: number) {
    const request = {email, medicineId, quantity, totalAmount}
    return this.httpClient.put(`${this.url}/purchase`, request);
  };

  purchaseFromCart(email: string, purchases) {
  }


}
