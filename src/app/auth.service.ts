import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  getAuthStatus(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  setToken(){
    localStorage.setItem('token', 'testing1234567890');
  }

   logOut(){
    localStorage.clear();
    this.router.navigate([''])
   }

}
