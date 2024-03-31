import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  admin = new admins();
  alert = false;
  logged!: any;

  constructor(private api: AdminApiService, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
  }


  addAdmin() {
    this.api.post(this.admin).subscribe((data: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('admin/list');
      }, 3000);
    })
  }
}
