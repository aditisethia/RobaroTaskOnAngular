import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-worker',
  templateUrl: './all-worker.component.html',
  styleUrls: ['./all-worker.component.css']
})
export class AllWorkerComponent {
  workers: any[] = [];

  constructor(private userService: AuthService , private route:Router) { }

  ngOnInit(): void {
    this.workers = this.userService.getAllWorkers();
    console.log("happy to have");
    
  }

  deleteWorker(workerId: string): void {
    this.userService.deleteWorkerById(workerId);
    const existingWorkersString = localStorage.getItem("workers");
    this.workers = existingWorkersString ? JSON.parse(existingWorkersString) : [];
}
}