import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.css']
})
export class AddSupervisorComponent {
  newSupervisor: any = {}; // Object to hold new worker data
 
  constructor(private authService: AuthService) {} // Inject your service

onInit(){
  console.log("fjgjfg");
  
}
newSuper = new FormGroup({
  name:new FormControl('',[
    Validators.required, Validators.minLength(3), Validators.maxLength(10)
  ]),
  email:new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
  ]),
  password:new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
  ]),
  phone:new FormControl('',[
    Validators.required,
    Validators.pattern(/^\d{10}$/)
  ]),

  userId: new FormControl('', [
    Validators.required
  ]),
  role: new FormControl('SUPERVISOR')
})


get email(){
  return this.newSuper.get('email')
}
get password()
{
  return this.newSuper.get('password')
}
get phone()
{
  return this.newSuper.get('phone')
}
get name()
{
  return this.newSuper.get('name')
}



onSubmit(): void {
   
  this.authService.addSupervisor(this.newSuper.value);
  Swal.fire("new Super Added Suucessfully");
}
}
