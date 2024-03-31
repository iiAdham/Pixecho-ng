import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { admins } from 'src/app/modules/admins';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  link!: any;
  about!: any;
  services!: any;
  clients!: any;
  contact!: any;
  home!: any;
  signin!: any;
  work!: any;
  admin = new admins();
  loggedIn!: any;
  constructor(private adminApi: AdminApiService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.link = activatedRoute.snapshot.routeConfig?.title;
    if (this.link == "Pixecho | About us") {
      this.about = true;
    }
    else if (this.link == "Pixecho") {
      this.home = true;
    }
    else if (this.link == "Pixecho | Services") {
      this.services = true;
    }
    else if (this.link == "Pixecho | Our clients") {
      this.clients = true;
    }
    else if (this.link == "Pixecho | Contact us") {
      this.contact = true;
    } else if (this.link == "Pixecho | Sign in") {
      this.signin = true;
    } else {
      this.work = true;
    }

    this.checkLogin();
  }

  checkLogin() {
    this.loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "false");

    if (this.loggedIn) {
      let adminID = localStorage.getItem("admin_id");
      this.adminApi.getById(adminID).subscribe((data) => {
        this.admin = data;
      });
    }
  }

  logOut() {
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("admin_id");
    this.loggedIn = false;
    this.router.navigateByUrl("/home");
  }
}
