import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  
  path:string = "https://jsonplaceholder.typicode.com/"

  getPosts(userId):Observable<Post[]> {
    if(userId){
      return this.http.get<Post[]>(this.path + "posts?userId=" + userId);
    } else {
      return this.http.get<Post[]>(this.path + "posts");
    }
  }
}
