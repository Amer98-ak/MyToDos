import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  uri = 'http://localhost:53613/api/ToDoes';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  Get() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
