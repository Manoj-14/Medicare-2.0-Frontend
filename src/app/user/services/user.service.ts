import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../entities/user';
import { environment } from '../../../environments/environment';
import { Address } from '../../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = `${environment.SERVER_URL}/users`;

  constructor(public httpClient: HttpClient) {}

  create(user: User) {
    return this.httpClient.post(`${this.url}/create`, user);
  }

  authenticate(email: string, password: string) {
    console.log(email, password);
    return this.httpClient.post(`${this.url}/authenticate`, {
      email: email,
      password: password,
    });
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.httpClient.put(`${this.url}/changePassword`, {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  }

  addToCart(medicineId: number, email: string) {
    return this.httpClient.put(`${this.url}/addToCart/${medicineId}`, {
      email: email,
    });
  }

  removeFromCart(medicineId: number, email: string) {
    return this.httpClient.put(`${this.url}/removeToCart/${medicineId}`, {
      email: email,
    });
  }

  removeMedicineFromCart(medicineId: number, email: string) {
    return this.httpClient.put(
      `${this.url}/removeMedicineFromCart/${medicineId}`,
      {
        email: email,
      }
    );
  }

  purchaseMedicine(medicineId: number, quantity: number, totalAmount: number) {
    const request = { medicineId, quantity, totalAmount };
    return this.httpClient.put(`${this.url}/purchase`, request);
  }

  purchaseFromCart(email: string, purchases) {}

  getUsers() {
    return this.httpClient.get(`${this.url}/`);
  }

  getCart() {
    return this.httpClient.get(`${this.url}/cart`);
  }

  getProfile() {
    return this.httpClient.get(`${this.url}/profile`);
  }

  updateAddress(address: any) {
    return this.httpClient.put(`${this.url}/address`, address);
  }

  addPhone(phone: number) {
    return this.httpClient.put(`${this.url}/phone`, phone);
  }

  getPurchases() {
    return this.httpClient.get(`${this.url}/purchases`);
  }
}
