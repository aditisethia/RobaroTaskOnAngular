
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterOutlet, RouterStateSnapshot, UrlTree ,} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate{

  constructor(private login:AuthService, private router:Router,private snack:MatSnackBar){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     console.log(this.login.isLoggedIn())
      if(this.login.isLoggedIn() && this.login.getUserRole()=="ADMIN")
      {
        return true;
      }
      else
      this.router.navigate(['']);
      this.snack.open("!! user page not actiavted !!","☹️",{
        duration:3000
      });

      return false;



  }




};
