import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  constructor(private route:Router,private toastr:ToastrService ){}
  
  canActivate(){
    if(this.isLoggedIn()){
      return true;
    }
    else{
      this.toastr.error('Access Denied');
      this.route.navigate(['./welcome']);
      return false; 
    }
  }
 
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.isLoggedIn()){
      return true
    }
    else{
      this.route.navigate(['./welcome']);
      return false;
    }
  }
}
