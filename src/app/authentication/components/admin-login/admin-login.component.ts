import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Admin} from "../../../entities/admin";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../admin/services/admin.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  isError: boolean = false;
  errMsg: string = "";

  constructor(private adminService: AdminService, private router: Router, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['expired'] === 'true') {
        this.isError = true;
        this.errMsg = "Login had expired please login again";
      setTimeout(() => {
        this.isError = false;
        this.errMsg = "";
      }, 5000)
      }
    });
  }

  onAdminLogin(admin: Admin, f: NgForm) {
    this.adminService.authenticate(admin.email, admin.password).subscribe((dbAdmin: Admin) => {
      sessionStorage.setItem("admin", String(dbAdmin.id));
      this.router.navigate(["admin/profile"]).then(() => sessionStorage.setItem("admin", String(dbAdmin.id)));
    }, (err) => {
      this.isError = true;
      this.errMsg = err.error.message;
      setTimeout(() => {
        this.isError = false;
        this.errMsg = "";
      }, 3000)
    });
    f.resetForm();
  }
}
