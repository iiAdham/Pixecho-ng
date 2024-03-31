import { projects } from '../../../modules/projects';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { ProjectApiService } from 'src/app/controllers/project-api.service';
import { clients } from 'src/app/modules/clients';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent {

  id!:any;
  Projects:projects[] = [];
  allClients:clients[]=[];
  allWork = false;
  constructor(private clientApi:ClientApiService,private projectApi:ProjectApiService,private activatedRoute:ActivatedRoute){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getAllData();
    if(this.id == 0){
      // ALL WORK
      this.allWork = true;
    }
    else{
      // SPECIFIC CLIENT
      this.allWork = false;
    }

  }


  hasProjects(client: any){
    return this.Projects.some(project => project.client_name === client.client_name);
  }

  getProjects(client: any){
    return this.Projects.filter(project => project.client_name === client.client_name);
  }

  getAllData(){
    this.projectApi.get().subscribe((projectData:any)=>{
      this.Projects = projectData;
    })
    this.clientApi.get().subscribe((clientData:any)=>{
      this.allClients = clientData;
    })
  }

}
