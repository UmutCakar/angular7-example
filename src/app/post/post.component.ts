import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  path:string = "https://jsonplaceholder.typicode.com/"
  posts:Post[]
  users:User[]
  

  ngOnInit() {
    this.getPosts();
    this.getUsers();
  }

  getPosts(){
    this.http.get<Post[]>(this.path + "posts").subscribe(response => {
      this.posts = response;
    })
  }

  getUsers(){
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    })
  }

}
