import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {

  id: any;

  constructor(private activatedRouters: ActivatedRoute, private dialogRef: MatDialogRef<ViewMedicineComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.activatedRouters.paramMap.subscribe(params => {
      console.log(params.get("id"));
      console.log(this.data);
    })
  }

  public closeMe() {
    this.dialogRef.close();
  }

}
