import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(false);
  url = "http://localhost:8000";
  user: any = null;

  constructor(private http: HttpClient,private router: Router) {
   }

   login(credentials) {
     
     return this.http.post(`${this.url}/api/signin`,credentials).pipe(
       tap((res)=>{
         localStorage.setItem('jwt',res["token"])
         localStorage.setItem('role',res["user"].role)
         localStorage.setItem('user',JSON.stringify(res["user"]))
         this.authenticationState.next(true);
         this.router.navigate(['/'])
       }),
       catchError((e)=>{
        alert(e.error.error_msg)
        throw new Error(e);
       })
     )
  }
   register(credentials) {
     
     return this.http.post(`${this.url}/api/signup`,credentials).pipe(
       tap((res)=>{
         alert("Sign Up Success,Please login to Continue")
         this.router.navigate(['/signin'])
       }),
       catchError((e)=>{
        alert(e.error.error_msg)
        throw new Error(e);
       })
     )
  }

  logout(){
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    this.authenticationState.next(false);
    alert("Logout Success");
    this.router.navigate(['/signin'])
    
  }

  isAuthenticated() {
    if(localStorage.getItem('jwt')){
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return !!localStorage.getItem('jwt')
  }

  getRole(){
    const role = localStorage.getItem('role')
    if(role == '1'){
      return "admin"
    }else{
      return "user"
    }
  }

  getToken(){
    return localStorage.getItem('jwt');
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

}
