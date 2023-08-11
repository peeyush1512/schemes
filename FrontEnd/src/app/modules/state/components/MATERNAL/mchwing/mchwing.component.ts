import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-mchwing',
  templateUrl: './mchwing.component.html',
  styleUrls: ['./mchwing.component.scss']
})
export class MCHWingComponent {

  data:any;

  displayedColumns=["index",'facilities','number','functional','remark']
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.datacall();
         

  }

  datacall(){

    this.apiservice.callapi('mchw').subscribe((result:any )=>{           
      this.data=new MatTableDataSource(result);
    })
  }

  

}
