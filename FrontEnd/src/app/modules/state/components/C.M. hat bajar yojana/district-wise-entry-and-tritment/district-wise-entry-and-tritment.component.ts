import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-district-wise-entry-and-tritment',
  templateUrl: './district-wise-entry-and-tritment.component.html',
  styleUrls: ['./district-wise-entry-and-tritment.component.scss']
})
export class DistrictWiseEntryAndTritmentComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','lyear','tyear','status'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('jphbumas').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
