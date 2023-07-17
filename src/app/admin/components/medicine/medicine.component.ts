import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Medicine} from "../../../entities/medicine";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit, OnChanges {

  @Input()
  medicine: Medicine;
  imageURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    console.log(this.medicine)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.medicine?.image?.content) {
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(this.medicine.image.content);
    }
  }

  getImageSrc(image) {
    const blob = new Blob([image.content], {type: image.contentType})
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    return imageUrl;
  }


}
