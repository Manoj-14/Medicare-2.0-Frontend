import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Medicine} from "../entities/medicine";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  url: string = `${environment.SERVER_URL}/medicines`;

  constructor(private httpClient: HttpClient) {
  }

  getMedicines() {
    return this.httpClient.get(`${this.url}/`)
  }

  getMedicineById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  create(medicine: any) {
    return this.httpClient.post(`${this.url}/create`, medicine);
  }

  update(medicine: Medicine) {
    return this.httpClient.put(`${this.url}/update`, medicine);
  }

  enableOrDisable(id: number) {
    return this.httpClient.put(`${this.url}/isenabled?enable=${id}`, {});
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }


}
