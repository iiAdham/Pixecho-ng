import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin = new admins();
  alert = false;
  admin_id!: any;
  loggedIn!: any;

  constructor(private api: AdminApiService, private router: Router) {
    this.checkLogin();
  }

  checkLogin() {
    this.loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (this.loggedIn) {
      this.router.navigateByUrl("/admin/dashboard");
    }
  }

  logIn() {
    this.api.get().subscribe((data: any) => {
      let user = data.find((result: any) => {
        if (result.admin_email === this.admin.admin_email && result.admin_password === this.admin.admin_password) {
          this.admin_id = result.id;
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("admin_id", this.admin_id);
        this.router.navigateByUrl('/admin')
      }
      else {
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      }
    });
  }
}
