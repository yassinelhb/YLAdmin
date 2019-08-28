import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3000/users';
  listUsers: User[];
  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get(this.apiURL)
        .toPromise()
        .then(res => this.listUsers = res as User[]);
  }

}
