import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// User Panel
import { NavbarComponent } from './user_panel/shared/navbar/navbar.component';
import { FooterComponent } from './user_panel/shared/footer/footer.component';
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutComponent } from './user_panel/main/about/about.component';
import { ServicesComponent } from './user_panel/main/services/services.component';
import { ClientsComponent } from './user_panel/main/clients/clients.component';
import { ContactComponent } from './user_panel/main/contact/contact.component';
import { Footer2Component } from './user_panel/shared/footer2/footer2.component';
import { OurWorkComponent } from './user_panel/main/our-work/our-work.component';
import { LoginComponent } from './user_panel/main/login/login.component';
import { WorkDetailsComponent } from './user_panel/main/work-details/work-details.component';
import { SpecificWorkComponent } from './user_panel/main/specific-work/specific-work.component';
// Admin Panel
import { NavbarComponent as adminNav } from './admin_panel/shared/navbar/navbar.component'
import { FooterComponent as adminFooter } from './admin_panel/shared/footer/footer.component';
import { AddClientComponent } from './admin_panel/main/clients/add-client/add-client.component';
import { EditClientComponent } from './admin_panel/main/clients/edit-client/edit-client.component';
import { ClientListComponent } from './admin_panel/main/clients/client-list/client-list.component';
import { AddProjectComponent } from './admin_panel/main/projects/add-project/add-project.component';
import { EditProjectComponent } from './admin_panel/main/projects/edit-project/edit-project.component';
import { ProjectsListComponent } from './admin_panel/main/projects/projects-list/projects-list.component';
import { AddAdminComponent } from './admin_panel/main/admin/add-admin/add-admin.component';
import { EditAdminComponent } from './admin_panel/main/admin/edit-admin/edit-admin.component';
import { AdminsListComponent } from './admin_panel/main/admin/admins-list/admins-list.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { ListComponent } from './admin_panel/main/contact/list/list.component';
// Imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    ContactComponent,
    Footer2Component,
    OurWorkComponent,
    LoginComponent,
    AddClientComponent,
    EditClientComponent,
    ClientListComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectsListComponent,
    AddAdminComponent,
    EditAdminComponent,
    AdminsListComponent,
    DashboardComponent,
    WorkDetailsComponent,
    adminNav,
    adminFooter,
    SpecificWorkComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pixechoapp","appId":"1:625099853364:web:993aaea958558e956b0461","databaseURL":"https://pixechoapp-default-rtdb.firebaseio.com","storageBucket":"pixechoapp.appspot.com","apiKey":"AIzaSyDKN6LmbwPLRpjs-ALbm9s64jUk2BI8siA","authDomain":"pixechoapp.firebaseapp.com","messagingSenderId":"625099853364"})),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
