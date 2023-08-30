import {Component, OnInit} from '@angular/core';
import {isNull} from "@angular/compiler/src/output/output_ast";
import { AdminService } from './services/admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router) {
    if(!this.adminService.checkJWT()) this.router.navigate(["auth/adminLogin"],{ queryParams: { expired: 'true' } })
  }

  ngOnInit(): void {
    const adminId: number = Number(sessionStorage.getItem("admin"));
  }

}
