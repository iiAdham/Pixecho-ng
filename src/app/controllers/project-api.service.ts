import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { projects } from '../modules/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService extends ApiFunctionsService<projects> {
  constructor(public override http: HttpClient) {
    super('https://iiadham-finalprojectapi.onrender.com/projects', http);
  }
}
