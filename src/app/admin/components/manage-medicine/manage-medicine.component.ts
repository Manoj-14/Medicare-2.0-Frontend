import {Component, OnInit} from '@angular/core';
import {MedicineService} from "../../../services/medicine.service";
import {Medicine} from "../../../entities/medicine";
import {MatDialog} from "@angular/material/dialog";
import {ViewMedicineComponent} from "../medicine/view-medicine/view-medicine.component";

@Component({
  selector: 'app-manage-medicine',
  templateUrl: './manage-medicine.component.html',
  styleUrls: ['./manage-medicine.component.css']
})
export class ManageMedicineComponent implements OnInit {

  medicines: Medicine[];

  constructor(private readonly medicineService: MedicineService, private dialog: MatDialog) {
    this.fetchMedicine();
  }

  ngOnInit(): void {
  }

  fetchMedicine() {
    this.medicineService.getMedicines().subscribe((dbMedicines: Medicine[]) => {
      this.medicines = dbMedicines;
    })
  }

  onUpdated() {
    console.log("updated");
    this.fetchMedicine();
  }
  

}
