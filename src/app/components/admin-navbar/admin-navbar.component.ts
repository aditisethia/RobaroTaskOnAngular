import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
   user:any;
  constructor(private auth:AuthService, private router:Router){}

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
    this. user = JSON.parse(localStorage.getItem('currentUser') || '{}');
   console.log(this.user+"=============>>>");
   
  }




}
