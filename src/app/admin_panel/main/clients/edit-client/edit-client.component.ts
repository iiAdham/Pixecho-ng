import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {

  logged!: any;
  id!: any;
  client = new clients();
  alert = false;
  project: projects[] = [];
  selectedProjects: projects[] = [];

  constructor(private projectApi: ProjectApiService, private clientApi: ClientApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.clientApi.getById(this.id).subscribe((data: any) => {
        this.client = data;
      })
      this.projectApi.get().subscribe((data: any) => {
        data.forEach((element: any) => {
          if (element.client_name === this.client.client_name) {
            this.project.push(element);
          }
        });
      })
    }
  }

  edit(id: any) {
    this.editProjects()

    this.clientApi.put(id, this.client).subscribe((res: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('admin/clients/list');
      }, 3000);
    })
  }

  editProjects() {
    for (let i = 0; i < this.project.length; i++) {
      this.project[i].client_name = this.client.client_name;
      console.log(this.project[i]);
      this.projectApi.put(this.project[i].id, this.project[i]).subscribe((res: any) => {
      })
    }
  }
}


