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

  constructor(private medicineService: MedicineService) {
  }

  handleImage(event: any) {
    this.medicineImage = event.target.files[0];
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
    this.medicineService.create(formData).subscribe((dbMedicine: Medicine) => {
      this.isSuccess = true;
      this.alertMsg = dbMedicine.name + " Medicine is added successfully"
      console.log(dbMedicine);
      setTimeout(() => {
        this.isSuccess = false;
        this.alertMsg = ""
      }, 5000)
      f.resetForm();
    }, (err) => {
      this.isError = true;
      this.alertMsg = err.error.message
      setTimeout(() => {
        this.isError = false;
        this.alertMsg = ""
      }, 5000)
    })
  }
}
