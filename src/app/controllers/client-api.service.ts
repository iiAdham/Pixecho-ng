import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { clients } from '../modules/clients';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService extends ApiFunctionsService<clients>{
  constructor(public override http: HttpClient) {
    super('https://iiadham-finalprojectapi.onrender.com/clients', http);
  }
}
