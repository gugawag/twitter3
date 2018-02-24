import {Injectable} from '@angular/core';
import {Post} from './post';

@Injectable()
export class PostsService {

  posts: Post[] = new Array<Post>();

  constructor() {
    this.posts.push(new Post('post 1'), new Post('post 2'),
      new Post('post 3'));
  }

  getPosts(): Post[] {
    return this.posts;
  }

  enviarPost(post: Post) {
    this.posts.push(post);
  }

}
