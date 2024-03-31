import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  logged!: any;
  allClients: clients[] = [];
  selectedClient = new clients();
  project: projects[] = [];
  categoryCondition!: any;
  projectsCount: any = 0;
  client_id!: any;
  alert = false;

  constructor(private projectApi: ProjectApiService, private router: Router, private clientApi: ClientApiService, private activatedRoute: ActivatedRoute) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.getAllData();
    }

  }

  getAllData() {
    this.projectApi.get().subscribe((projectData: any) => {
      this.project = projectData;
    })
    this.clientApi.get().subscribe((clientData: any) => {
      this.allClients = clientData;
    })
  }

  hasProjects(client: any) {
    return this.project.some(project => project.client_name === client.client_name);
  }

  getProjects(client: any) {
    return this.project.filter(project => project.client_name === client.client_name);
  }

  remove(id: any) {
    const r = confirm("Are you sure to delete?");
    if (r) {
      this.projectApi.delete(id).subscribe((res: any) => {
        this.alert = true;
        this.getAllData()
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      })
    }
  }
}
