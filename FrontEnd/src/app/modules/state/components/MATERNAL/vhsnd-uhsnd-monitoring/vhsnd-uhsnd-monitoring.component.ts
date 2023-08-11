import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vhsnd-uhsnd-monitoring',
  templateUrl: './vhsnd-uhsnd-monitoring.component.html',
  styleUrls: ['./vhsnd-uhsnd-monitoring.component.scss']
})
export class VHSNDUHSNDMonitoringComponent {

  vhsnddata: any;
  displayedColumns:string[]=['index','district','vhsnd','uhsnd','total']
  constructor() {

  }

  ngOnInit() {
   
    this.vhsndcall();
    // window.location.href = "https://govthealth.cg.gov.in/vhsnd/RptVHSNDEntryStatus.aspx";
  }

  vhsndcall() {
    this.vhsnddata = [      
 {"district":"KANKER ", "vhsnd":4202 ,"uhsnd":165 },
 {"district":"KAWARDHA", "vhsnd": 3887 ,"uhsnd":117 },
 {"district":"RAIPUR", "vhsnd": 1272 ,"uhsnd":603 },
 {"district":"DURG", "vhsnd": 889 ,"uhsnd":549 },
 {"district":"DHAMTARI", "vhsnd": 1280 ,"uhsnd":121 },
 {"district":"RAIGARH ", "vhsnd":1320,"uhsnd": 66 },
 {"district":"SURGUJA", "vhsnd": 1252,"uhsnd": 86 },
 {"district":"JANJGIR ", "vhsnd":1258,"uhsnd": 52 },
 {"district":"RAJNANDGAON", "vhsnd": 1183,"uhsnd": 95 },
 {"district":"KORBA", "vhsnd": 930 ,"uhsnd":334 },
 {"district":"SURAJPUR", "vhsnd": 1181,"uhsnd": 0 },
 {"district":"BALODA BAJAR", "vhsnd": 1104,"uhsnd": 47 },
 {"district":"BILASPUR", "vhsnd": 949 ,"uhsnd":165 },
 {"district":"MAHASAMUND", "vhsnd": 1030,"uhsnd": 26 },
  ]
  this.vhsnddata= new MatTableDataSource(this.vhsnddata);
  }

 



  // this.data.forEach((element: any) => {
  //         if(element.value >= 90){

  //         }else if(element.value <=89 && element.value >=75){

  //         }else if(element.value < 75){

  //         }
  //     });

}
