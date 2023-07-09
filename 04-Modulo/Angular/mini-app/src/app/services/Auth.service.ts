import { Injectable } from '@angular/core';
import { Observable , of } from "rxjs";
import { UserEntity } from '../model/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: UserEntity;
  private isLoggedin: boolean;

  constructor() {
    this.user = {
      username : '',
      password : ''
    }
    this.isLoggedin = false;
  }

  login( user: UserEntity ): Observable<boolean> {
    if(user.username === 'master@lemoncode.net' && user.password === '12345678'){
      this.user = user;
      this.isLoggedin = true;
      localStorage.setItem('login', '{"username": "' + this.user.username + '", "isLoggedin": "' + JSON.stringify(this.isLoggedin) + '"}');
    }
    return of(this.isLoggedin);
  }

   logout(): void {
    this.user = {
      username : '',
      password : ''
    }
    this.isLoggedin = false;
    localStorage.removeItem('login');
   }

   isLogged(): boolean {
     let userLoggued = localStorage.getItem("login");
     if (userLoggued !== null) {
      return JSON.parse(localStorage.getItem("login")!).isLoggedin;
     }
     return false;

   }

   getUsername(): string {
    let userLoggued = localStorage.getItem("login");
    if (userLoggued !== null) {
      return JSON.parse(localStorage.getItem("login")!).username;
     }
    return '';
   }

}
