
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router) { }
 
  private currentUser = new BehaviorSubject<any>(null);
  private isLoggedIn = new BehaviorSubject<Boolean>(false);

getCurrentUser(){
 return this.currentUser.asObservable();
}

getIsLoggedIn(){
 return this.isLoggedIn.asObservable();
}

login(user:any){
  //debugger
  if(user.id == 0){
    this.currentUser.next(null);
    this.isLoggedIn.next(false);
    localStorage.clear();
  }else{
    this.currentUser.next(user);
    this.isLoggedIn.next(true);
   // localStorage.setItem("userDetails", JSON.stringify(user));
    localStorage.setItem("userDetails", "user");
    this._router.navigate(['dashboard'])
  }
}

logout(){
  this.currentUser.next(null);
  this.isLoggedIn.next(false);
  localStorage.clear();
  this._router.navigate(['login'])
}


 
}
