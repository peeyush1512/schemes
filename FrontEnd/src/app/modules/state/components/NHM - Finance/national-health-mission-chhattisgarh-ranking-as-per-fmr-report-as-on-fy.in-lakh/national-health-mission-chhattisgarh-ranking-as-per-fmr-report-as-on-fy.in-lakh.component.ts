import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh',
  templateUrl: './national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh.component.html',
  styleUrls: ['./national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh.component.scss']
})
export class NationalHealthMissionChhattisgarhRANKINGAsPerFMRReportAsOnFYInLakhComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','rop','expe','percentage'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('nhmcrpfmrr').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
