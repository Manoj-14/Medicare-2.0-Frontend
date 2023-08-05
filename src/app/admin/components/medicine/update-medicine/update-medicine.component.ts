import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Medicine} from "../../../../entities/medicine";
import {MedicineService} from "../../../../services/medicine.service";

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  medicine: Medicine;

  @Output()
  medicineUpdate = new EventEmitter<{}>();

  constructor(private dialogRef: MatDialogRef<UpdateMedicineComponent>, @Inject(MAT_DIALOG_DATA) public data: Medicine, private readonly medicineService: MedicineService) {
    this.medicine = data;
    this.dialogRef.afterClosed().subscribe(() => {
      this.medicineUpdate.emit();
    })
  }

  ngOnInit(): void {

  }


  updateMedicine() {
    this.dialogRef.close({success: true});
    // this.medicineService.update(this.medicine).subscribe((res) => {
    //   this.dialogRef.close({success: true});
    // })
  }

  activeBtn() {

  }
}
