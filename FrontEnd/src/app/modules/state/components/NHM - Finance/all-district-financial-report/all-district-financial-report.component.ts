import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-all-district-financial-report',
  templateUrl: './all-district-financial-report.component.html',
  styleUrls: ['./all-district-financial-report.component.scss']
})
export class AllDistrictFinancialReportComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'activity','rop','expe','percentage'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('sjvr').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
