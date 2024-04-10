import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { WorkerDashboardComponent } from './components/worker-dashboard/worker-dashboard.component';
import { WebcamModule } from 'ngx-webcam';
import { ImageWebcamComponent } from './components/image-webcam/image-webcam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { AllWorkerComponent } from './components/all-worker/all-worker.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { AllSupervisorComponent } from './components/all-supervisor/all-supervisor.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { AdminmainComponent } from './components/adminmain/adminmain.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    WorkerDashboardComponent,
    ImageWebcamComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AddWorkerComponent,
    AllWorkerComponent,
    AddSupervisorComponent,
    AllSupervisorComponent,
    SupervisorComponent,
    AdminmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    WebcamModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
