import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-status-of-dialysis-unit-in-other-source-dmf-csr-jds',
  templateUrl: './status-of-dialysis-unit-in-other-source-dmf-csr-jds.component.html',
  styleUrls: ['./status-of-dialysis-unit-in-other-source-dmf-csr-jds.component.scss']
})
export class StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','tdma','psd','ai','remark'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('sdouios').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
