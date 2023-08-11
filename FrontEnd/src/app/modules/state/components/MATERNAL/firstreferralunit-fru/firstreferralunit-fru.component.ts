import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-firstreferralunit-fru',
  templateUrl: './firstreferralunit-fru.component.html',
  styleUrls: ['./firstreferralunit-fru.component.scss']
})
export class FIRSTREFERRALUNITFRUComponent {

  data:any;

  displayedColumns=["index",'facilities','designated','functional','fapc']
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.datacall();
         

  }

  datacall(){

    this.apiservice.callapi('fru').subscribe((result:any )=>{           
      this.data=new MatTableDataSource(result);
    })
  }

  

}
