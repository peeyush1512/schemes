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
    this.ancela = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]


    this.vhsndcall();
    this.ancelacall();




  }

  vhsndcall() {
    this.vhsnddata = [{ id: 1, district: "KAWARDHA", vhsnd: 700, uhsnd: 304 }]
  }

  ancelacall() {
    this.data = [{ percent: '90', data: [] }, { percent: '89', data: [] }, { percent: '75', data: [] }];


    this.ancela.forEach((element: any) => {

      if (element.value >= 90) {

      } else if (element.value <= 89 && element.value >= 75) {

      } else if (element.value < 75) {

      }
    });

    this.dataSource = new MatTableDataSource(this.data);
  }



  // this.data.forEach((element: any) => {
  //         if(element.value >= 90){

  //         }else if(element.value <=89 && element.value >=75){

  //         }else if(element.value < 75){

  //         }
  //     });

}
