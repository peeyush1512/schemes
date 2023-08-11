import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-hwcs-operational-status',
  templateUrl: './hwcs-operational-status.component.html',
  styleUrls: ['./hwcs-operational-status.component.scss']
})
export class HWCsOperationalStatusComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','tf','cshchwc','nef','cshchwcnef','ftfd'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('hwcsos').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
