import { Injectable, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}
  get currentUser() {
    return this.afAuth.auth.currentUser;
  }
  doLoginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        .then((resources) => {
          return this.currentUser;
        });
  }
}
