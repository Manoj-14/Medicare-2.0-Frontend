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

  constructor(
    private medicineService: MedicineService,
    private jwtService: JwtService
  ) {
    this.fetchMedicines();
  }

  ngOnInit(): void {
    console.log(this.jwtService.decode(localStorage.getItem('token')));
  }

  fetchMedicines() {
    this.medicineService.getMedicines().subscribe((dbMedicines: Medicine[]) => {
      this.medicines = dbMedicines;
    });
  }
}
