import {Injectable} from '@angular/core';
import {Post} from './post';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  postsCol: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCol = afs.collection('posts');
  }

  getPosts(): Observable<Post[]> {
    return this.postsCol.valueChanges();
  }

  enviarPost(post: Post) {
    this.postsCol.add({texto: post.texto});
  }

}
