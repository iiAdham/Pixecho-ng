import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';
import { projects } from 'src/app/modules/projects';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent {

  project_id!:any;
  client_id!:any;
  project = new projects();
  client_name!:any;
  selectedClient = new clients();
  selectedClientImg!:any;
  constructor(private clientApi:ClientApiService,private projectApi:ProjectApiService,private activatedroute:ActivatedRoute){
    this.project_id = this.activatedroute.snapshot.params['project_id'];
    this.client_id = this.activatedroute.snapshot.params['client_id'];

    this.projectApi.getById(this.project_id).subscribe((data:any)=>{
      this.project = data;
      this.client_name = this.project.client_name;
    })
    this.clientApi.getById(this.client_id).subscribe((res:any)=>{
      this.selectedClient = res;
    })
  }

}
