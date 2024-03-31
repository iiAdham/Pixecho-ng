import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  logged!: any;
  alert = false;
  project = new projects();
  Clients: clients[] = [];

  constructor(private projectApi: ProjectApiService, private clientApi: ClientApiService, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.clientApi.get().subscribe((data: any) => {
        this.Clients = data;
      })
    }
  }
  addProject() {
    this.projectApi.post(this.project).subscribe((res: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('admin/projects/list');
      }, 3000);
    })
  }
}
