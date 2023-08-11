import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-pradhan-mantri-national-dialysis-program-pmndp',
  templateUrl: './pradhan-mantri-national-dialysis-program-pmndp.component.html',
  styleUrls: ['./pradhan-mantri-national-dialysis-program-pmndp.component.scss']
})
export class PradhanMantriNationalDialysisProgramPMNDPComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'indicator','tlfy','achievl','ttfy','achievt'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('pmndp').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
