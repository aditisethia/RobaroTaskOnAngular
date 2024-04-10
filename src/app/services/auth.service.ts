import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = "assets/User.json"; // URL to your JSON data

  constructor(private http: HttpClient,private router:Router) {}

  login(email: string, password: string): Observable<boolean> {
    console.log(email +"-"+password);
    
    return this.http.get<{ users: any[] }>(this.usersUrl)
    .pipe(
      map(response => {
        const users = response.users; 
        console.log("Response from server:", users); 
        let found = false;
        for (let user of users) {
         console.log(user);
         
          if (user.email === email && user.password === password) {
            found = true;
            localStorage.setItem('currentUser', JSON.stringify(user))
            break;
          }
        }
        return found;
      })
    );
}

captureImage(imageData: string): void {
 
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  currentUser.images.push(imageData);
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}


public isLoggedIn() {
  let user = localStorage.getItem('currentUser')
  if (user == undefined || user == '' || user == null)
    return false;

    return true;


}

public logout() {
 
 localStorage.removeItem('currentUser');
 this.router.navigate(['login'])
 return true;
}
public getUser() {
  let userStr = localStorage.getItem("currentUser");
  if (userStr != null)
    return JSON.parse(userStr);

    this.logout();
    return null;

}

//get user role

public getUserRole():any {
  let user = this.getUser()
  console.log(user.role);
  return user.role;
}

getAllUsers(): Observable<any[]> {
  return this.http.get<{ users: any[] }>(this.usersUrl)
    .pipe(
      map(response => response.users)
    );
}



public addWorker(newWorker: any): void {
  this.getAllUsers().subscribe(users => {
    users.push(newWorker);
    console.log(users);
    
    localStorage.setItem('users', JSON.stringify(users));
  });
}

getAllWorkers(): any[] {
  // Retrieve existing workers from localStorage
  const existingWorkersString = localStorage.getItem("workers");
  let existingWorkers = existingWorkersString ? JSON.parse(existingWorkersString) : [];

  // Retrieve all users from localStorage
  const usersString = localStorage.getItem('users');
  const users = usersString ? JSON.parse(usersString) : [];

  // Filter new workers
  const newWorkers = users.filter((user: { role: string; }) => user.role === 'WORKER');

  // Check if there are existing workers
  if (existingWorkers.length === 0) {
      // If no existing workers, store new workers directly
      existingWorkers = newWorkers;
  } else {
      // If there are existing workers, add only new workers
      newWorkers.forEach((newWorker: any) => {
          // Check if the new worker already exists
          const workerExists = existingWorkers.some((existingWorker: any) => existingWorker.userId === newWorker.userId);
          if (!workerExists) {
              // If the new worker doesn't exist, add it to the list
              existingWorkers.push(newWorker);
          }
      });
  }

  // Store the updated list in localStorage
  localStorage.setItem('workers', JSON.stringify(existingWorkers));

  // Log and return the updated list of workers
  console.log(existingWorkers);
  return existingWorkers;
}


getWorkersFromLocalStorage(): any[] {
  const workersString = localStorage.getItem('workers');
  return workersString ? JSON.parse(workersString) : [];
}


public addSupervisor(newSupervisor: any): void {
  this.getAllUsers().subscribe(users => {
    users.push(newSupervisor);
    console.log(users);
    
    localStorage.setItem('users', JSON.stringify(users));
  });
}

getAllSupervisors(): any[] {
  // Retrieve existing supervisors from localStorage
  const existingSupervisorsString = localStorage.getItem("supervisors");
  let existingSupervisors = existingSupervisorsString ? JSON.parse(existingSupervisorsString) : [];

  // Retrieve all users from localStorage
  const usersString = localStorage.getItem('users');
  const users = usersString ? JSON.parse(usersString) : [];

  // Filter new supervisors
  const newSupervisors = users.filter((user: { role: string; }) => user.role === 'SUPERVISOR');

  // Check if there are existing supervisors
  if (existingSupervisors.length === 0) {
      // If no existing supervisors, store new supervisors directly
      existingSupervisors = newSupervisors;
  } else {
      // If there are existing supervisors, add only new supervisors
      newSupervisors.forEach((newSupervisor: any) => {
          // Check if the new supervisor already exists
          const supervisorExists = existingSupervisors.some((existingSupervisor: any) => existingSupervisor.userId === newSupervisor.userId);
          if (!supervisorExists) {
              // If the new supervisor doesn't exist, add it to the list
              existingSupervisors.push(newSupervisor);
          }
      });
  }

  // Store the updated list in localStorage
  localStorage.setItem('supervisors', JSON.stringify(existingSupervisors));

  // Log and return the updated list of supervisors
  console.log(existingSupervisors);
  return existingSupervisors;
}

//removing existing worker from id
public deleteWorkerById(workerId: string): void {
  // Retrieve existing workers from localStorage
  const existingWorkersString = localStorage.getItem("workers");
  let existingWorkers = existingWorkersString ? JSON.parse(existingWorkersString) : [];

  // Retrieve existing users from localStorage
  const usersString = localStorage.getItem('users');
  let users = usersString ? JSON.parse(usersString) : [];

  // Filter out the worker with the provided ID from the workers list
  existingWorkers = existingWorkers.filter((worker: any) => worker.userId !== workerId);

  // Filter out the worker with the provided ID from the users list
  users = users.filter((user: any) => user.userId !== workerId);

  // Store the updated list of workers in localStorage
  localStorage.setItem('workers', JSON.stringify(existingWorkers));

  // Store the updated list of users in localStorage
  localStorage.setItem('users', JSON.stringify(users));
}



public deleteSupervisorById(supervisorId: string): void {
  // Retrieve existing supervisors from localStorage
  const existingSupervisorsString = localStorage.getItem("supervisors");
  let existingSupervisors = existingSupervisorsString ? JSON.parse(existingSupervisorsString) : [];

  // Retrieve existing users from localStorage
  const usersString = localStorage.getItem('users');
  let users = usersString ? JSON.parse(usersString) : [];

  // Filter out the supervisor with the provided ID from the supervisors list
  existingSupervisors = existingSupervisors.filter((supervisor: any) => supervisor.userId !== supervisorId);

  // Filter out the supervisor with the provided ID from the users list
  users = users.filter((user: any) => user.userId !== supervisorId);

  // Store the updated list of supervisors in localStorage
  localStorage.setItem('supervisors', JSON.stringify(existingSupervisors));

  // Store the updated list of users in localStorage
  localStorage.setItem('users', JSON.stringify(users));
}

getTotalWorkers(): Observable<number> {
  return this.http.get<{ users: any[] }>(this.usersUrl)
    .pipe(
      map(response => {
        const users = response.users;
        const totalWorkers = users.filter(user => user.role === 'WORKER').length;
        return totalWorkers;
      })
    );
}

getTotalSupervisors(): Observable<number> {
  return this.http.get<{ users: any[] }>(this.usersUrl)
    .pipe(
      map(response => {
        const users = response.users;
        const totalSupervisors = users.filter(user => user.role === 'SUPERVISOR').length;
        return totalSupervisors;
      })
    );
}


getTotalUsers(): Observable<number> {
  return this.http.get<{ users: any[] }>(this.usersUrl)
    .pipe(
      map(response => {
        const users = response.users;
        const totalUsers = users.length;
        return totalUsers;
      })
    );
}
}


