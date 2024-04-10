import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ImageWebcamComponent } from './components/image-webcam/image-webcam.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard } from './Gaurd/auth.guard';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { AllWorkerComponent } from './components/all-worker/all-worker.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { AllSupervisorComponent } from './components/all-supervisor/all-supervisor.component';
import { WorkerDashboardComponent } from './components/worker-dashboard/worker-dashboard.component';
import { WorkerGuard } from './Gaurd/worker.guard';
import { AdminmainComponent } from './components/adminmain/adminmain.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';

const routes: Routes = [
{
  path:"",
  component:LoginComponent
},
{
  path:"capture",
  component:ImageWebcamComponent
},
{
  path:"allsupervisor",
  component:AllSupervisorComponent
},
{
  path: "admin",
  component: AdminDashboardComponent,
  canActivate: [authGuard],
  children:[
    {
      path:"addworker",
      component:AddWorkerComponent
    },
    {
      path:"main",
      component:AdminmainComponent

    },
    {
      path:"allworker",
      component:AllWorkerComponent
    },
    {
      path:"addsupervisor",
      component:AddSupervisorComponent
    },
    {
      path:"allsupervisor",
      component:AllSupervisorComponent
    },
  ]
},
{
  path: "worker",
  component: WorkerDashboardComponent,
  canActivate: [WorkerGuard],},
  {
    path: "supervisor",
    component: SupervisorComponent,
    canActivate: [WorkerGuard],}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
