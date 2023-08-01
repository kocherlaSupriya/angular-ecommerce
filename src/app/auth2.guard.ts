import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  canActivate(){
    if(this.isLoggedIn()){
      return false;
    }
    else{
      return true;
    }
    
  }
  
}
