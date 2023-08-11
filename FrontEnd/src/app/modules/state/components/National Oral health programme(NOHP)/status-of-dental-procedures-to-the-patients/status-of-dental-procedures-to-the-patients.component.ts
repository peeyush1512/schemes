import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-status-of-dental-procedures-to-the-patients',
  templateUrl: './status-of-dental-procedures-to-the-patients.component.html',
  styleUrls: ['./status-of-dental-procedures-to-the-patients.component.scss']
})
export class StatusOfDentalProceduresToThePatientsComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','yt','pt','achievn','pyachiev','ppachiev'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('sopdttp').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
