import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutComponent } from './user_panel/main/about/about.component';
import { ClientsComponent } from './user_panel/main/clients/clients.component';
import { ServicesComponent } from './user_panel/main/services/services.component';
import { ContactComponent } from './user_panel/main/contact/contact.component';
import { OurWorkComponent } from './user_panel/main/our-work/our-work.component';
import { LoginComponent } from './user_panel/main/login/login.component';
import { WorkDetailsComponent } from './user_panel/main/work-details/work-details.component';
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { AddAdminComponent } from './admin_panel/main/admin/add-admin/add-admin.component';
import { EditAdminComponent } from './admin_panel/main/admin/edit-admin/edit-admin.component';
import { AddClientComponent } from './admin_panel/main/clients/add-client/add-client.component';
import { EditClientComponent } from './admin_panel/main/clients/edit-client/edit-client.component';
import { AdminsListComponent } from './admin_panel/main/admin/admins-list/admins-list.component';
import { ClientListComponent } from './admin_panel/main/clients/client-list/client-list.component';
import { AddProjectComponent } from './admin_panel/main/projects/add-project/add-project.component';
import { EditProjectComponent } from './admin_panel/main/projects/edit-project/edit-project.component';
import { ProjectsListComponent } from './admin_panel/main/projects/projects-list/projects-list.component';
import { SpecificWorkComponent } from './user_panel/main/specific-work/specific-work.component';
import { ListComponent } from './admin_panel/main/contact/list/list.component';


const routes: Routes = [
  { path: '', title: 'Pixecho', component: HomeComponent },
  { path: 'about', title: 'Pixecho | About us', component: AboutComponent },
  { path: 'services', title: 'Pixecho | Services', component: ServicesComponent },
  { path: 'clients', title: 'Pixecho | Our clients', component: ClientsComponent },
  { path: 'contact', title: 'Pixecho | Contact us', component: ContactComponent },
  {
    path: 'work', title: 'Pixecho | Our work',
    children: [{
      path: '',
      component: OurWorkComponent
    },
    {
      path: ':project_id/:client_id/details',
      component: WorkDetailsComponent
    }
    ]
  },
  {
    path: 'specWork/:id', title: 'Pixecho | Our work', component: SpecificWorkComponent
  },
  {
    path: 'admin',
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',
      },
      {
        path: 'dashboard', title: 'Pixecho | Admin panel', component: DashboardComponent
      },
      {
        path: 'add', title: 'Pixecho | Add new admin', component: AddAdminComponent
      },
      {
        path: 'edit/:id', title: 'Pixecho | Edit admin', component: EditAdminComponent
      },
      {
        path: 'list', title: 'Pixecho | Admins list', component: AdminsListComponent
      },
      {
        path: 'clients',
        children: [
          {
            path: '', redirectTo: 'list', pathMatch: 'full',
          },
          {
            path: 'add', title: 'Pixecho | Add new client', component: AddClientComponent
          },
          {
            path: 'edit/:id', title: 'Pixecho | Edit client', component: EditClientComponent
          },
          {
            path: 'list', title: 'Pixecho | Clients list', component: ClientListComponent
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '', redirectTo: 'list', pathMatch: 'full',
          },
          {
            path: 'add', title: 'Pixecho | Add new project', component: AddProjectComponent
          },
          {
            path: 'edit/:id', title: 'Pixecho | Edit project', component: EditProjectComponent
          },
          {
            path: 'list', title: 'Pixecho | Projects list', component: ProjectsListComponent
          }
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: 'list', title: 'Pixecho | Contacts list', component: ListComponent
          }
        ]
      },
    ]
  },
  { path: 'login', title: 'Pixecho | Sign in', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
