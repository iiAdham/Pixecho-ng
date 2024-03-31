import { clients } from 'src/app/modules/clients';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/controllers/client-api.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  logged!: any;
  client: clients[] = [];
  alert = false;
  constructor(private api: ClientApiService, private router: Router) {
    this.logged = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (!this.logged) {
      this.router.navigateByUrl('Home');
    }
    else {
      this.getAllData();
    }
  }

  getAllData() {
    this.api.get().subscribe((data: any) => {
      this.client = data;
    })
  }

  remove(id: any) {
    const r = confirm("Are you sure to delete?");
    if (r) {
      this.api.delete(id).subscribe((res: any) => {
        this.alert = true;
        this.getAllData();
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      })
    }
  }
}
