import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Medicine} from "../../../../entities/medicine";

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {

  id: any;
  medicine: Medicine;

  constructor(private activatedRouters: ActivatedRoute, private dialogRef: MatDialogRef<ViewMedicineComponent>, @Inject(MAT_DIALOG_DATA) public data: Medicine) {
    this.medicine = this.data;
    console.log(this.medicine);
  }

  ngOnInit(): void {
  }

  public closeMe() {
    this.dialogRef.close();
  }

}
