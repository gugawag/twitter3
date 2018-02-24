import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/post';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>;
  postsSabadoTematico: Observable<Post[]>;

  post = new Post('');

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSabadoTematico = this.postsService.getPostsSabadoTematico();
  }

  enviarPost() {
    this.postsService.enviarPost(this.post);
  }

}
