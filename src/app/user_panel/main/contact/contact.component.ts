import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactApiService } from 'src/app/controllers/contact-api.service';
import { contacts } from 'src/app/modules/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = new contacts();
  alert: boolean = false;

  constructor(private contactApi: ContactApiService, private router: Router) {

  }
  sendMsg() {
    this.contactApi.post(this.contact).subscribe((res: any) => {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        this.router.navigateByUrl('/home');
      }, 3000);
    })
  }
}
