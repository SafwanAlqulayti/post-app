import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../posts/api.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  public post;
  
  
  constructor(
    private ApiService :ApiService,
    private route: ActivatedRoute
  ) {
    let  id = +this.route.snapshot.paramMap.get('id')

    this.ApiService.getOnePost(id).subscribe(
      data => {console.log(data); this.post = data }, 
      err => console.error(err),
      () => console.log('done loading the post')
    );       
   }

  ngOnInit(): void {
  }

}
