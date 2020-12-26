import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public Posts;
  constructor(
   private ApiService :ApiService,
   ) {
       this.ApiService.getPosts().subscribe(
         data => {console.log(data); this.Posts = data }, 
         err => console.error(err),
         () => console.log('done loading posts')
       );       
      }

  ngOnInit(): void {
  }

}
 