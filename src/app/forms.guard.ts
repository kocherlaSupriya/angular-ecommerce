import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeliveryComponent } from './products/delivery/delivery.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FormsGuard implements CanDeactivate<DeliveryComponent> {
  constructor(private _snackBar: MatSnackBar){}
  canDeactivate(
    component: DeliveryComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.loginForm.pristine){
      return component.loginForm.pristine;
    }
    else{
      this._snackBar.open('You have unsaved changes!','Discard')
      return false;
    }
      
  }
  
}
