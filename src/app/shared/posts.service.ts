import {Injectable} from '@angular/core';
import {Post} from './post';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  postsCol: AngularFirestoreCollection<Post>;
  postsSabadoTematicoCol: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCol = afs.collection('posts');
    this.postsSabadoTematicoCol = afs.collection('posts', ref => ref.where('texto', '>', '#sabadotematico').where('texto', '<', '#sabadotematicoz'));

  }

  getPosts(): Observable<Post[]> {
    return this.postsCol.valueChanges();
  }

  enviarPost(post: Post) {
    this.postsCol.add({texto: post.texto});
  }

  getPostsSabadoTematico(): Observable<Post[]> {
    return this.postsSabadoTematicoCol.valueChanges();
  }

}
