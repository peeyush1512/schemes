import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { CommonComponent } from "./components/common/common.component";

const routes: Routes = [
  {
   path:"",component:CommonComponent ,
   children:[
    { 
      path:"dashboard",component:DashboardComponent 
     },
    { 
      path:"",redirectTo:'/district/dashboard',pathMatch:'full' 
     },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
