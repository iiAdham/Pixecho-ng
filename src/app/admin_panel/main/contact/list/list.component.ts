import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactApiService } from 'src/app/controllers/contact-api.service';
import { contacts } from 'src/app/modules/contacts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contact: contacts[] = [];
  alert: boolean = false;
  constructor(private contactApi: ContactApiService, private router: Router) {
    this.getAllData();
  }
  getAllData() {
    this.contactApi.get().subscribe((data: any) => {
      this.contact = data;
    })
  }
  viewMsg(id: any) {
    this.contactApi.getById(id).subscribe((data: any) => {
      alert("Message: " + data.message);
    })

  }

  remove(id: any) {
    const r = confirm("Are you sure to delete?");
    if (r) {
      this.contactApi.delete(id).subscribe((data: any) => {
        this.alert = true;
        this.getAllData();
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      })
    }
  }
}
