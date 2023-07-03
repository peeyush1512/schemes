import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vhsnd-uhsnd-monitoring',
  templateUrl: './vhsnd-uhsnd-monitoring.component.html',
  styleUrls: ['./vhsnd-uhsnd-monitoring.component.scss']
})
export class VHSNDUHSNDMonitoringComponent {

  vhsnddata: any;
  ancela: any;
  data: any;
  columnsToDisplay = ["value"]
  constructor() {

  }

  displayedColumns: string[] = ['percent', 'name'];
  dataSource: any;

  ngOnInit() {
   
    this.vhsndcall();
   
  }

  vhsndcall() {
    this.vhsnddata = [{ id: 1, district: "KAWARDHA", vhsnd: 700, uhsnd: 304 }]
  }

 



  // this.data.forEach((element: any) => {
  //         if(element.value >= 90){

  //         }else if(element.value <=89 && element.value >=75){

  //         }else if(element.value < 75){

  //         }
  //     });

}
