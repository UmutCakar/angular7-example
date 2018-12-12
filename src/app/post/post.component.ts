import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service'
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private activatedRoute:ActivatedRoute,
    private alertifyService:AlertifyService,
    private postService:PostService,
    private userService:UserService
    ) { }

  posts:Post[]
  users:User[]
  today:Date = new Date(2018,11,12)
  

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userId"]);
    })
  }

  getPosts(userId){
    this.postService.getPosts(userId).subscribe(data => {
      this.posts = data;
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
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
