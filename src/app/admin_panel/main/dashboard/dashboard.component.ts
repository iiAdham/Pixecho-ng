import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { admins } from 'src/app/modules/admins';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  admin = new admins();
  client = new clients();
  project = new projects();
  adminCounter: number = 0;
  clientCounter: number = 0;
  projectCounter: number = 0;
  logged!: any;
  admin_id = JSON.parse(localStorage.getItem("admin_id") || "")

  constructor(private adminApi: AdminApiService, private clientApi: ClientApiService, private projectApi: ProjectApiService, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.adminApi.get().subscribe((data: any) => {
        this.admin = data;
        data.forEach(() => {
          this.adminCounter += 1;
        });
      })
      this.clientApi.get().subscribe((data: any) => {
        this.client = data;
        data.forEach(() => {
          this.clientCounter += 1;
        });
      })
      this.projectApi.get().subscribe((data: any) => {
        this.project = data;
        data.forEach(() => {
          this.projectCounter += 1;
        });
      })
      this.adminApi.getById(this.admin_id).subscribe((data: any) => {
        this.admin = data;
      })
    }
  }
}
