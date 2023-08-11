import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DistrictRoutingModule } from './district-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonComponent } from './components/common/common.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

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
import { FruRComponent } from './components/reports/fru-r/fru-r.component';
import { NvbdcpComponent } from './components/forms/nvbdcp/nvbdcp.component';
import { AesjeComponent } from './components/forms/aesje/aesje.component';
import { AesjeRComponent } from './components/reports/aesje-r/aesje-r.component';
import { NvbdcpRComponent } from './components/reports/nvbdcp-r/nvbdcp-r.component' 


@NgModule({
  declarations: [
    DashboardComponent,
    CommonComponent,
    FruComponent,
    MchwingComponent,
    BtsisfComponent,
    SsbcComponent,
    SobsuiFruChcsChsComponent,
    FicipComponent,
    AtovpComponent,
    DorvdComponent,
    TohwaSHWPComponent,
    TohwaSHWPRComponent,
    FicipRComponent,
    AtovpRComponent,
    DorvdRComponent,
    SobsuiFruChcsChsRComponent,
    SsbcRComponent,
    BtsisfRComponent,
    MchwingRComponent,
    FruRComponent,
    NvbdcpComponent,
    AesjeComponent,
    AesjeRComponent,
    NvbdcpRComponent
  ],
  imports: [
    CommonModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    DistrictRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class DistrictModule { }
