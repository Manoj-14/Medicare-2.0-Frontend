import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Medicine} from "../../../entities/medicine";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {MedicineService} from "../../../services/medicine.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ViewMedicineComponent} from "./view-medicine/view-medicine.component";
import {UpdateMedicineComponent} from "./update-medicine/update-medicine.component";

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit, OnChanges {

  @Input()
  medicine: Medicine;
  imageURL: SafeUrl;

  @Input()
  btnLink: boolean;

  @Output()
  update = new EventEmitter<{ updated: boolean; }>();

  constructor(private sanitizer: DomSanitizer, private readonly medicineService: MedicineService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    console.log(this.medicine)
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getImageSrc(image) {
    const blob = new Blob([image.content], {type: image.contentType})
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    return imageUrl;
  }


  deleteMedicine() {
    this.medicineService.delete(this.medicine.id).subscribe((res) => {
      this.update.emit({updated: true});
    }, (err) => {
      console.log(err.error.message);
    })
  }

  updateMedicine() {
    this.update.emit({updated: true});
  }

  viewMed() {
    this.dialog.open(ViewMedicineComponent, {
      width: "100vw",
      height: "75%",
      hasBackdrop: true,
      closeOnNavigation: true,
      panelClass: "dialog-container",
      data: this.medicine
    });
  }

  updatePopUp() {
    this.dialog.open(UpdateMedicineComponent, {
      width: "100vw",
      height: "90%",
      hasBackdrop: true,
      closeOnNavigation: true,
      data: this.medicine
    })
    this.dialog.afterAllClosed.subscribe((res) => {
      this.update.emit({updated: true});
      console.log(res);
    })
  }

  activeBtn() {
    this.medicineService.enableOrDisable(this.medicine.id).subscribe((res) => {
      
    })
  }
}
