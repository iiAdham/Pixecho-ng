import { AdminApiService } from 'src/app/controllers/admin-api.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent {

  admin: admins[] = [];
  alert = false;
  logged!: any;

  constructor(private api: AdminApiService, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.getAllData();
    }
  }

  getAllData() {
    this.api.get().subscribe((data: any) => {
      this.admin = data;
    })
  }

  delete(id: any) {
    const r = confirm("Are you sure to delete?");
    if (r) {
      this.api.delete(id).subscribe((data: any) => {
        this.alert = true;
        this.getAllData();
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      })
    }
  }
}
