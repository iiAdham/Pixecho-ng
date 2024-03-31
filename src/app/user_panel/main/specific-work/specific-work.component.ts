import { projects } from '../../../modules/projects';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';
import { takeUntil } from 'rxjs/operators'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-specific-work',
  templateUrl: './specific-work.component.html',
  styleUrls: ['./specific-work.component.css']
})
export class SpecificWorkComponent {
  id!: any;
  Projects: projects[] = [];
  client = new clients();
  allWork = false;
  shownProjects: projects[] = [];
  isEmpty!: boolean;

  constructor(
    private clientApi: ClientApiService,
    private projectApi: ProjectApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];

    forkJoin([
      this.clientApi.getById(this.id),
      this.projectApi.get()
    ]).subscribe(
      ([clientData, projectData]: [any, any]) => {
        this.client = clientData;
        this.Projects = projectData;

        this.Projects.forEach(element => {
          if (element.client_name === this.client.client_name) {
            this.shownProjects.push(element);
          }
        });
      },
      error => {
        // Handle error here
        console.error('Error fetching data:', error);
      }
    );
  }


  hasProjects(client: any) {
    return this.Projects.some(project => project.client_name === client.client_name);
  }
}
