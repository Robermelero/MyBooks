import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:4000';
  public logueado: boolean = false;
  public user: User;

  constructor(private http: HttpClient) {
    this.logueado = false;
    this.user = null;
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }

  login(user: User) {
    return this.http.post(`${this.url}/login`, user);
  }

  edit(user: User) {
    return this.http.put(`${this.url}/profile`, user);
  }
}

