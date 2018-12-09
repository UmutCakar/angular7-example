import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private activatedRoute:ActivatedRoute,
    private alertifyService:AlertifyService
    ) { }

  path:string = "https://jsonplaceholder.typicode.com/"
  posts:Post[]
  users:User[]
  

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userId"]);
    })
  }

  getPosts(userId){
    if(userId){
      this.http.get<Post[]>(this.path + "posts?userId=" + userId).subscribe(response => {
        this.posts = response;
      });
    } else {
      this.http.get<Post[]>(this.path + "posts").subscribe(response => {
        this.posts = response;
      });
    }
  }

  getUsers(){
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    })
  }

  addToFavorites(post){
    this.alertifyService.success("Added to favs: " + post.title)
  }

  testWarning(post){
    this.alertifyService.warning("Warning: " + post.title)
  }

  testDanger(post){
    this.alertifyService.error("Danger: " + post.title)
  }

  testMessage(post){
    this.alertifyService.message("Message: " + post.title)
  }

}
