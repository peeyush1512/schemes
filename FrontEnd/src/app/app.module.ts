import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './conmponents/login/login.component';
import { ForgetPasswordComponent } from './conmponents/forget-password/forget-password.component';
import { PageNotFoundComponent } from './conmponents/page-not-found/page-not-found.component';


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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,


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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
