import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-nabl-certification-status-of-ictcs-chhattisgarh',
  templateUrl: './nabl-certification-status-of-ictcs-chhattisgarh.component.html',
  styleUrls: ['./nabl-certification-status-of-ictcs-chhattisgarh.component.scss']
})
export class NABLCertificationStatusOfICTCsChhattisgarhComponent {
 
 
  data: any;

  displayedColumns: string[] = ['index', 'district','nictc','snabl'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('nablcsictcsc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
