import { Injectable, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;
  constructor(public afAuth: AngularFireAuth) {}
  getCurrentUser() {
    return this.currentUser;
  }
  loginUser(name, password) {
    this.afAuth;
    debugger;
  }
}
