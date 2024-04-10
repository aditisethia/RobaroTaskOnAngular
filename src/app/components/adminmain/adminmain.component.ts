import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent {
  totalWorkers$: Observable<number> | undefined;
  totalSupervisors$: Observable<number> | undefined;
  totalUsers$: Observable<number> | undefined;
  users: any[]=[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.totalWorkers$ = this.authService.getTotalWorkers();
    this.totalSupervisors$ = this.authService.getTotalSupervisors();
    this.totalUsers$ = this.authService.getTotalUsers();
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.authService.getAllUsers().subscribe(
      (users: any[]) => {
        this.users = users;
        console.log(this.users+"---------------->");
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
