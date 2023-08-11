import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-statusof-hrpreportinginthe-state',
  templateUrl: './statusof-hrpreportinginthe-state.component.html',
  styleUrls: ['./statusof-hrpreportinginthe-state.component.scss']
})
export class StatusofHRPreportingintheStateComponent {

  data:any;

  displayedColumns=["index","district","pwr","pwrft","pertpwr","hrpwr","perhrpratpwr","sapwr","md"]
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.datacall();
         
      
  }
  datacall(){

    this.apiservice.callapi('sohrps').subscribe((result :any)=>{
      this.data=result;
      this.data =new MatTableDataSource(this.data);
    })

    // this.data = [{"district":"Jashpur","pwr":2779,"pwrft":2404,"pertpwr":86.5,"hrpwr":731,"perhrpratpwr": 26.3 ,"sapwr":  23 ,"md":0}];
    // this.dataSource=new MatTableDataSource(this.data);
  }

  


}
