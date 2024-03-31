import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { Component } from '@angular/core';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  client: clients[] = [];
  project: projects[] = [];

  constructor(private projectApi: ProjectApiService, private clientApi: ClientApiService) {
    this.clientApi.get().subscribe((data: any) => {
      this.client = data;
    })
  }

}
