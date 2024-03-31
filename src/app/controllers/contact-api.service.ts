import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { contacts } from '../modules/contacts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService extends ApiFunctionsService<contacts> {
  constructor(public override http: HttpClient) {
    super("http://localhost:3000/contacts", http);
  }
}
