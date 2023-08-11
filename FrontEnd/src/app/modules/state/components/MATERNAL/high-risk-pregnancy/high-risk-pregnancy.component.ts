import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-high-risk-pregnancy',
  templateUrl: './high-risk-pregnancy.component.html',
  styleUrls: ['./high-risk-pregnancy.component.scss']
})
export class HighRiskPregnancyComponent {

  data:any;
  dataSource:any;

  displayedColumns=["index","district","pmsma","hrp","perhrp","tmr","pertmr","nottmr"]
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.datacall();
         

  }

  datacall(){

    this.apiservice.callapi('hrp').subscribe((result:any )=>{
      this.data=result;            
      this.data=new MatTableDataSource(this.data);
    })
    // this.data = [{"district":"BALOD","pmsma":2239,"hrp":259,"perhrp": 77.12,"tmr":205,"pertmr":79.15,"nottmr":54}];
    // this.dataSource=new MatTableDataSource(this.data);
  }

  

}
