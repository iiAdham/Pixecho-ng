import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/controllers/admin-api.service';
import { admins } from 'src/app/modules/admins';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin_id = JSON.parse(localStorage.getItem("admin_id") || "")
  admin = new admins();
  constructor(private api:AdminApiService,private router:Router){
    this.api.getById(this.admin_id).subscribe((data:any)=>{
      this.admin = data;
    })
  }

  logOut(){
    localStorage.setItem("loggedIn","false");
    localStorage.removeItem("admin_id");
    this.router.navigateByUrl('/login');
  }
}
