import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MedicineService} from "../../../../services/medicine.service";
import {Medicine} from "../../../../entities/medicine";

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  isError: boolean = false;
  isSuccess: boolean = false;
  alertMsg: string = ""
  medicineImage: File | null = null;

  constructor(private httpClient: HttpClient, private medicineService: MedicineService) {
  }

  handleImage(event: any) {
    this.medicineImage = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.medicineImage, this.medicineImage.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    this.httpClient.post("http://localhost:8088/api/medicines/create", formData, {headers}).subscribe((res) => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

  onMedicine(value: any, f: NgForm) {
    const formData = new FormData;
    formData.append("name", value.name);
    formData.append("description", value.description);
    formData.append("price", value.price);
    formData.append("seller", value.seller);
    formData.append("image", this.medicineImage);
    console.log(value);
    this.medicineService.create(formData).subscribe((resp: Medicine) => {
      console.log(resp);
    }, (err) => {
      console.log(err);
    })
  }
}
