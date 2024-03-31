import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';
import { clients } from 'src/app/modules/clients';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  logged!: any;
  client = new clients();
  alert = false;

  constructor(private api: ClientApiService, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {

    }
  }

  addClient() {
    this.api.post(this.client).subscribe((res: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('admin/clients/list');
      }, 3000);
    })
  }
}
