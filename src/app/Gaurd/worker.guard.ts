import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';



import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn:'root'
})
export class WorkerGuard implements CanActivate{

  constructor(private login:AuthService, private router:Router,private snack:MatSnackBar){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     console.log(this.login.isLoggedIn())
      if(this.login.isLoggedIn() && this.login.getUserRole()=="WORKER")
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
