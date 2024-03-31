import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T>{

  constructor(@Inject(String) protected url: string, protected http: HttpClient) { }

  get(): Observable<T> {
    return this.http.get<T>(this.url);
  }

  post(data: any): Observable<T> {
    return this.http.post<T>(this.url, data);
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(this.url + '/' + id);
  }

  put(id: any, data: any): Observable<T> {
    return this.http.put<T>(this.url + "/" + id, data);
  }

  delete(id: any): Observable<T> {
    return this.http.delete<T>(this.url + "/" + id);
  }
}
