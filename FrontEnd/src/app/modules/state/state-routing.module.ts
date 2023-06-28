import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VHSNDUHSNDMonitoringComponent } from './components/vhsnd-uhsnd-monitoring/vhsnd-uhsnd-monitoring.component';

const routes: Routes = [ {
  path:"",component:CommonComponent ,
  children:[
   { 
     path:"dashboard",component:DashboardComponent 
    },
   { 
     path:"vhsnd-uhsnd",component:VHSNDUHSNDMonitoringComponent 
    },
   { 
     path:"",redirectTo:'/state/dashboard',pathMatch:'full' 
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
