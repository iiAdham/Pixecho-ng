import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { HttpClient } from '@angular/common/http';
import { admins } from '../modules/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService extends ApiFunctionsService<admins> {

  constructor(public override http: HttpClient) {
    super('http://localhost:3000/admins', http);
  }

}
