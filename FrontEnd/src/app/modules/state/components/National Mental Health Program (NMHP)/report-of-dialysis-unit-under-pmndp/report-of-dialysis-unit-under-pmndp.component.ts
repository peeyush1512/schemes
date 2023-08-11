import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-report-of-dialysis-unit-under-pmndp',
  templateUrl: './report-of-dialysis-unit-under-pmndp.component.html',
  styleUrls: ['./report-of-dialysis-unit-under-pmndp.component.scss']
})
export class ReportOfDialysisUnitUnderPMNDPComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','tdma','psd','iumspmpd','tds','pachiev'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('roduupmndp').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
