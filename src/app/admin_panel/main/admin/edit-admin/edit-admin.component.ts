
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  admin = new admins();
  id!: number;
  alert = false;
  logged!: any;
  constructor(private api: AdminApiService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.api.getById(this.id).subscribe((data: any) => {
        this.admin = data;
      })
    }
  }
  edit(id: any) {
    this.api.put(id, this.admin).subscribe((data: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('admin/list');
      }, 3000);
    })
  }

  print(name: any) {
    console.log(name);

  }
}
