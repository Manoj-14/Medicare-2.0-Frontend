import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Medicine} from "../entities/medicine";
import {map} from 'rxjs/operators';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  url: string = `${environment.SERVER_URL}/medicines`;

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
  }

  getMedicines() {
    return this.httpClient.get(`${this.url}`);
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

  getImageSrc(image) {
    const blob = new Blob([image.content], {type: image.contentType})
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    return imageUrl;
  }

}
