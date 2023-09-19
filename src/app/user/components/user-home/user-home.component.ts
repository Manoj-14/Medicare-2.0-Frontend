import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/entities/medicine';
import { JwtService } from 'src/app/services/jwt.service';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  medicines: Medicine[];
  sorted: boolean = false;
  clickedSorted: boolean = false;
  searchText: string = '';
  tempMedicines: Medicine[];

  constructor(
    private medicineService: MedicineService,
    private jwtService: JwtService
  ) {
    this.fetchMedicines();
  }

  ngOnInit(): void {}

  fetchMedicines() {
    this.medicineService.getMedicines().subscribe((dbMedicines: Medicine[]) => {
      this.medicines = dbMedicines;
      this.tempMedicines = dbMedicines;
    });
  }

  updated() {
    this.fetchMedicines();
  }

  sortMedicines(dsc?: Boolean) {
    this.clickedSorted = true;
    if (!dsc) {
      for (let i = 0; i < this.medicines.length; i++) {
        for (let j = 0; j < this.medicines.length; j++) {
          if (
            this.medicines[i].name.toLowerCase() <
            this.medicines[j].name.toLowerCase()
          ) {
            const temp: Medicine = this.medicines[i];
            this.medicines[i] = this.medicines[j];
            this.medicines[j] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.medicines.length; i++) {
        for (let j = 0; j < this.medicines.length; j++) {
          if (
            this.medicines[i].name.toLowerCase() >
            this.medicines[j].name.toLowerCase()
          ) {
            const temp: Medicine = this.medicines[i];
            this.medicines[i] = this.medicines[j];
            this.medicines[j] = temp;
          }
        }
      }
    }
    this.sorted = !this.sorted;
  }

  searchBar() {
    if (this.searchText.trim() != '') {
      this.medicines = this.tempMedicines.filter((medicine) =>
        medicine.name
          .toLowerCase()
          .includes(this.searchText.trim().toLowerCase())
      );
    } else {
      this.fetchMedicines();
    }
  }
}
