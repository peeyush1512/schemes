import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [ {
  path:"",component:CommonComponent ,
  children:[
   { 
     path:"dashboard",component:DashboardComponent 
    },
   { 
     path:"",redirectTo:'/hospital/dashboard',pathMatch:'full' 
    },
    
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
