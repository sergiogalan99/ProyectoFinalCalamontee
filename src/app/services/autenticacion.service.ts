import { Injectable } from '@angular/core';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private firebase: AngularFireAuth) { }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebase.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.firebase.auth.signOut();
  }


  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebase.auth.createUserWithEmailAndPassword(email, password);

  }
}
