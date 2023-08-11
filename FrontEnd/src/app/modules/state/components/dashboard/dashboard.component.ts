import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentDateTime:any ;

  constructor(private datepipe :DatePipe) {}
  ngOnInit(){
    this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');
  }
}
