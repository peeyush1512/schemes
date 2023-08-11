import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-documents-required-for-nabl-certification',
  templateUrl: './documents-required-for-nabl-certification.component.html',
  styleUrls: ['./documents-required-for-nabl-certification.component.scss']
})
export class DocumentsRequiredForNABLCertificationComponent {
  
 
  data: any;

  displayedColumns: string[] = ['index', 'document','aod'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('drnavblc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
