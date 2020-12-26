import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { OnePostComponent } from './one-post/one-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './posts/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    OnePostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "posts" , component: PostsComponent},
      {path: "posts/:id" , component: OnePostComponent }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
