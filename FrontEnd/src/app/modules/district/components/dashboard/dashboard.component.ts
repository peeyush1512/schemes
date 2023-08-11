import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  currentDateTime:any ;

  constructor(private datepipe :DatePipe) {}
  ngOnInit(){
    this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');
  }
}
