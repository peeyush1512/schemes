import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './conmponents/login/login.component';
import { ForgetPasswordComponent } from './conmponents/forget-password/forget-password.component';
import { PageNotFoundComponent } from './conmponents/page-not-found/page-not-found.component';
import { DistrictModule } from './modules/district/district.module'
import { StateModule } from './modules/state/state.module'
import { HospitalModule } from './modules/hospital/hospital.module'

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"forget",
    component:ForgetPasswordComponent,
  },
  {
    path:"",redirectTo:'login',pathMatch:'full'
  },
  {
    path:"district",
    loadChildren:()=>DistrictModule
  },
  {
    path:"state",
    loadChildren:()=>StateModule
  },
  {
    path:"hospital",
    loadChildren:()=>HospitalModule
  },
  {
    path:"**",
    component:PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
