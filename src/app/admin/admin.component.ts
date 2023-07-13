import {Component, OnInit} from '@angular/core';
import {isNull} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const adminId: number = Number(sessionStorage.getItem("admin"));
  }

}
