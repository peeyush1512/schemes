import { NgModule } from '@angular/core';
import { CommonModule ,DatePipe } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
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
import { VHSNDUHSNDMonitoringComponent } from './components/vhsnd-uhsnd-monitoring/vhsnd-uhsnd-monitoring.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CommonComponent,
    VHSNDUHSNDMonitoringComponent,
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
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
  ],
  providers:[DatePipe]
})
export class StateModule { }
