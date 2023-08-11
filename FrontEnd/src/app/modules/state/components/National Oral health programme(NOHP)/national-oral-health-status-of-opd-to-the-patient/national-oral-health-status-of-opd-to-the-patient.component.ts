import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-national-oral-health-status-of-opd-to-the-patient',
  templateUrl: './national-oral-health-status-of-opd-to-the-patient.component.html',
  styleUrls: ['./national-oral-health-status-of-opd-to-the-patient.component.scss']
})
export class NATIONALORALHEALTHStatusOfOPDToThePatientComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','yt','pt','achievn','pyachiev','ppachiev'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('nohsoopdtp').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
