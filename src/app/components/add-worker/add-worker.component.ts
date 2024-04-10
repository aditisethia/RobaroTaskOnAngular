import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent {
  newWorker = new FormGroup({
    userName:new FormControl('',[
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
    role: new FormControl('WORKER')
  })
 

  get email(){
    return this.newWorker.get('email')
  }
  get password()
  {
    return this.newWorker.get('password')
  }
  get phone()
  {
    return this.newWorker.get('phone')
  }
  get name()
  {
    return this.newWorker.get('name')
  }
 
  constructor(private authService: AuthService) {} // Inject your service

onInit(){
  console.log("fjgjfg");
  
}

  onSubmit(): void {
   
    this.authService.addWorker(this.newWorker.value);
    Swal.fire("new Worker Added Suucessfully");
  }
}
