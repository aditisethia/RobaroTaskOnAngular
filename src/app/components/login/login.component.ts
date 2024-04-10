import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AuthRequest } from '../Payloads/AuthRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 

  constructor(private authService: AuthService, private router:Router) {}

  

  loginData=new FormGroup({
    email:new FormControl('',[
      Validators.required,
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    ]),
  });  
  
  get email(){
    return this.loginData.get('email')
  }
  get password()
  {
    return this.loginData.get('password')
  }
  login(data:FormGroup) {
    this.authService.login(data.get('email') ?.value, data.get('password') ?.value).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/capture'])
        } else {
          alert('Invalid credentials');
        }
      }
    );
  }

}
