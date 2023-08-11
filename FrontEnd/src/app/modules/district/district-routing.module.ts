import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { CommonComponent } from "./components/common/common.component";



import { FruComponent } from './components/forms/fru/fru.component';
import { MchwingComponent } from './components/forms/mchwing/mchwing.component';
import { BtsisfComponent } from './components/forms/btsisf/btsisf.component';
import { SsbcComponent } from './components/forms/ssbc/ssbc.component';
import { SobsuiFruChcsChsComponent } from './components/forms/sobsui-fru-chcs-chs/sobsui-fru-chcs-chs.component';
import { FicipComponent } from './components/forms/ficip/ficip.component';
import { AtovpComponent } from './components/forms/atovp/atovp.component';
import { DorvdComponent } from './components/forms/dorvd/dorvd.component';
import { TohwaSHWPComponent } from './components/forms/tohwa-shwp/tohwa-shwp.component';
import { TohwaSHWPRComponent } from './components/reports/tohwa-shwp-r/tohwa-shwp-r.component';
import { FicipRComponent } from './components/reports/ficip-r/ficip-r.component';
import { AtovpRComponent } from './components/reports/atovp-r/atovp-r.component';
import { DorvdRComponent } from './components/reports/dorvd-r/dorvd-r.component';
import { SobsuiFruChcsChsRComponent } from './components/reports/sobsui-fru-chcs-chs-r/sobsui-fru-chcs-chs-r.component';
import { SsbcRComponent } from './components/reports/ssbc-r/ssbc-r.component';
import { BtsisfRComponent } from './components/reports/btsisf-r/btsisf-r.component';
import { MchwingRComponent } from './components/reports/mchwing-r/mchwing-r.component';
import { FruRComponent } from './components/reports/fru-r/fru-r.component' 
import { NvbdcpComponent } from './components/forms/nvbdcp/nvbdcp.component'
import { AesjeComponent } from './components/forms/aesje/aesje.component'
import { AesjeRComponent } from './components/reports/aesje-r/aesje-r.component'
import { NvbdcpRComponent } from './components/reports/nvbdcp-r/nvbdcp-r.component'


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
     { 
      path:"FruComponent",component:FruComponent 
     },
     { 
      path:"MchwingComponent",component:MchwingComponent 
     },
     { 
      path:"BtsisfComponent",component:BtsisfComponent 
     },
     { 
      path:"SsbcComponent",component:SsbcComponent 
     },
     { 
      path:"NvbdcpComponent",component:NvbdcpComponent 
     },
     { 
      path:"AesjeComponent",component:AesjeComponent 
     },
     { 
      path:"AesjeRComponent",component:AesjeRComponent 
     },
     { 
      path:"NvbdcpRComponent",component:NvbdcpRComponent 
     },
     { 
      path:"SobsuiFruChcsChsComponent",component:SobsuiFruChcsChsComponent 
     },
     { 
      path:"FicipComponent",component:FicipComponent 
     },
     { 
      path:"AtovpComponent",component:AtovpComponent 
     },
     { 
      path:"DorvdComponent",component:DorvdComponent 
     },
     { 
      path:"TohwaSHWPComponent",component:TohwaSHWPComponent 
     },
     { 
      path:"TohwaSHWPRComponent",component:TohwaSHWPRComponent 
     },
     { 
      path:"FicipRComponent",component:FicipRComponent 
     },
     { 
      path:"AtovpRComponent",component:AtovpRComponent 
     },
     { 
      path:"DorvdRComponent",component:DorvdRComponent 
     },
     { 
      path:"SobsuiFruChcsChsRComponent",component:SobsuiFruChcsChsRComponent 
     },
     { 
      path:"SsbcRComponent",component:SsbcRComponent 
     },
     { 
      path:"BtsisfRComponent",component:BtsisfRComponent 
     },
     { 
      path:"MchwingRComponent",component:MchwingRComponent 
     },
     { 
      path:"FruRComponent",component:FruRComponent 
     }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
