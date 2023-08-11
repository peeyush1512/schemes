import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-pmndp-portal-entry-status-district-wise',
  templateUrl: './pmndp-portal-entry-status-district-wise.component.html',
  styleUrls: ['./pmndp-portal-entry-status-district-wise.component.scss']
})
export class PMNDPPortalEntryStatusDistrictWiseComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','hspr','dsmr','gap','pachiev'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('pmndppesdw').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
