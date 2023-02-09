import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  authChange = new Subject<boolean>();

  private user!: User;

  registerUser(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  logOut(){
    this.user = null as any;
    this.authChange.next(false);
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user != null;
  }

  private authSuccessfully(){
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
