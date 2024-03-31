import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  logged!: any;
  project = new projects();
  allClients: clients[] = []
  project_id!: any;
  alert = false;
  constructor(private projectApi: ProjectApiService, private clientApi: ClientApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.project_id = this.activatedRoute.snapshot.params['id'];
      this.projectApi.getById(this.project_id).subscribe((res: any) => {
        this.project = res;
      })
      this.clientApi.get().subscribe((res: any) => {
        this.allClients = res;
      })
    }
  }
  edit() {
    this.projectApi.put(this.project_id, this.project).subscribe((res: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('admin/projects/list');
      }, 3000);
    })
  }
}
