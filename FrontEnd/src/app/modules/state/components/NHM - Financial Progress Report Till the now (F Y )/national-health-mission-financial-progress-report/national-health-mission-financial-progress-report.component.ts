import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-national-health-mission-financial-progress-report',
  templateUrl: './national-health-mission-financial-progress-report.component.html',
  styleUrls: ['./national-health-mission-financial-progress-report.component.scss']
})
export class NationalHealthMissionFinancialProgressReportComponent2 {

 
  data: any;

  displayedColumns: string[] = ['index', 'program','rop','expe','percentage'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('nhmvprfr').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
