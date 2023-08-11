import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-chc-and-phc-mental-health-opd',
  templateUrl: './chc-and-phc-mental-health-opd.component.html',
  styleUrls: ['./chc-and-phc-mental-health-opd.component.scss']
})
export class CHCANDPHCMENTALHEALTHOPDComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','target','total','percentage'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('chcphcmhopd').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
