import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-supervisor',
  templateUrl: './all-supervisor.component.html',
  styleUrls: ['./all-supervisor.component.css']
})
export class AllSupervisorComponent {
  workers: any[] = [];

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.workers = this.userService.getAllSupervisors();
    console.log("happy to have");
    
  }

  deleteSupervisor(supervisorId: string): void {
    console.log(supervisorId);
    this.userService.deleteSupervisorById(supervisorId); // Corrected method name
    this.workers = this.userService.getAllSupervisors(); // Update the workers list after deletion
  }
}
