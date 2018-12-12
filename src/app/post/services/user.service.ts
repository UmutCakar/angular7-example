import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  path:string = "https://jsonplaceholder.typicode.com/"

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.path + "users");
  }
}
